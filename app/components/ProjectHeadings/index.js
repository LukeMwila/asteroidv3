import React from 'react';

const ProjectHeadings = (props) => {
    return(
        <div className="floatLeft fullWidth modalContainer__heading">
			<div className="floatLeft fullHeight modalCellBlock center">
				<span className="uppercase spaceLetters">Category</span>
		    </div>
			<div className="floatLeft fullHeight modalCellBlock">
				<span className="uppercase spaceLetters">Project</span>
			</div>
			<div className="floatLeft fullHeight modalCellBlock">
				<span className="uppercase spaceLetters">Client</span>
			</div>
			<div className="floatLeft fullHeight modalCellBlock">
				<span className="uppercase spaceLetters">Time Spent</span>
			</div>
			<div className="floatLeft fullHeight modalCellBlock">
				<span className="uppercase spaceLetters">Deadline</span>
			</div>
			<div className="floatLeft fullHeight modalCellBlock ">
				<form>
                    <input 
                        type="text" 
                        className="projectSearch" 
                        placeholder=" SEARCH TASK..." 
                        value={props.search} 
                        onChange={props.filterList} 
                    />
				</form>
			</div>
		</div>
    );
}

export default ProjectHeadings;