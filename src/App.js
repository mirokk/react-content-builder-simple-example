import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, Content} from 'react-content-builder';


class SimpleApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {editing:false, content:props.content};	

		this.edit =()=>{
			this.setState({editing:true});
		}	

		this.save = (c)=>{
			this.setState({editing:false, content:c});
		}
	}

	render(){
		if (this.state.editing){
			return (
				<Editor content={this.state.content} save={this.save} />
			);
			
		} else {
			return (
				<div>				
					<Content content={this.state.content} />

					<div style={{margin:"40px", textAlign:"center"}}>
						<button type="button" className="btn btn-success" onClick={this.edit} >Edit</button>
					</div>
				</div>			
			);			
		}
	}
}


let content = [{"cols":[{"params":{"width":"third"},"elements":[{"type":"TextAndHeadline","params":{"text":"This is a configurable **Drag and Drop Content Builder for React.js** applications.\n  \nIt supports **Markdown**","hl":"Welcome!"}}]},{"params":{"width":"third"},"elements":[{"type":"Headline","params":{"hl":"react-content-builder"}},{"type":"Text","params":{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}]},{"params":{"width":"third"},"elements":[{"type":"Headline","params":{"hl":"Highly adaptable "}},{"type":"Text","params":{"text":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}}]}]}];

ReactDOM.render(
  <SimpleApp content={content} save={save} />,
  document.getElementById("content")
);


