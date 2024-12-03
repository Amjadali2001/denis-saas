from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime
from ..core import deps
from ..schemas.time_entry import TimeEntryCreate, TimeEntry
from ..crud import time_entry as crud

router = APIRouter()

@router.post("/start", response_model=TimeEntry)
def start_time_entry(
    *,
    db: Session = Depends(deps.get_db),
    current_user = Depends(deps.get_current_user),
    time_entry_in: TimeEntryCreate
):
    """Start a new time entry"""
    return crud.create_time_entry(db, obj_in=time_entry_in, user_id=current_user.id)

@router.post("/{id}/stop", response_model=TimeEntry)
def stop_time_entry(
    *,
    db: Session = Depends(deps.get_db),
    current_user = Depends(deps.get_current_user),
    id: int
):
    """Stop an existing time entry"""
    time_entry = crud.get(db, id=id)
    if not time_entry:
        raise HTTPException(status_code=404, detail="Time entry not found")
    if time_entry.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return crud.stop_time_entry(db, db_obj=time_entry)

@router.get("/", response_model=List[TimeEntry])
def list_time_entries(
    *,
    db: Session = Depends(deps.get_db),
    current_user = Depends(deps.get_current_user),
    skip: int = 0,
    limit: int = 100,
    start_date: datetime = None,
    end_date: datetime = None
):
    """Retrieve time entries"""
    return crud.get_multi_by_user(
        db, user_id=current_user.id, skip=skip, limit=limit,
        start_date=start_date, end_date=end_date
    )