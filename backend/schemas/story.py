from typing import List,Optional,Dict
from datetime import datetime
from pydantic import BaseModel


class StoryOptionsSchemas(BaseModel):
    text:str
    node_id:Optional[int] = None

class StoryNodeBase(BaseModel):
    content: str
    is_ending: bool= False
    is_winning_ending: bool=False
    