import React from "react";
import $ from "jquery"
import { marked } from "marked";
class Editor extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = {
            input:  `# Welcome to my React Markdown Previewer!
            \n## this is a sub-heading
            \nHeres some code, \`<div></div>\`, between 2 backticks.
            
            
            
            \`\`\`
            //codeblock
            function App() {
              return (
                <div className="App">
                  <Editor />
                </div>
              );
            }
            
            \`\`\`
            
            \nThere's also [links](https://www.freecodecamp.org), and
            \n> Block Quotes!
            
            
            \n* list items

            \n- And of course there are lists.
           \n - Some are bulleted.
           \n  - With different indentation levels.
           \n     - That look like this.
          
          
           \n1. And there are numbered lists too.
           \n1. Use just 1s if you want!
           \n1. And last but not least, let's not forget embedded images:
          
            
            
            \n![alternative text](https://picsum.photos/200)
            
            
            \nYou can also make text **bold**... whoa!
            Or _italic_.
            Or... wait for it... **_both!_**
            .
            `,
            height: "15vh"
          };
        this.handleChange = this.handleChange.bind(this)
        this.maximizeEditor = this.maximizeEditor.bind(this)
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    maximizeEditor() {
        
           switch (this.state.height){
            case "30vh": 
                $("#editor").css("height", "75vh");
                this.setState({
                    input: this.state.input,
                    height: "75vh"
                })
                break;
            case "75vh":
                $("#editor").css("height", "30vh");
                this.setState({
                    input: this.state.input,
                    height: "30vh"
                })    
            default:
                $("#editor").css("height", "30vh");
                this.setState({
                    input: this.state.input,
                    height: "30vh"
                })
           }
        
    }
    render() {
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1 className="center">Markdown Parser</h1>    
                    </div> 
                    <div className="col-md-4"></div> 
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="wrap">
                            <div class="head">
                                <label>Editor</label>
                                <button
                                id="extend"
                                 onClick={this.maximizeEditor}>
                                    <i class="fa-solid fa-expand"></i>
                                </button>
                            </div>
                            <textarea
                                id="editor"
                                onChange={this.handleChange}
                                value={this.state.input}/>

                        </div>    
                    </div>
                    <div className="col-md-4"></div>

                    
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="wrap col-md-8">
                        <div className="head">
                           <label>Preview</label>
                        </div>
                        <div id="preview">
                                <div dangerouslySetInnerHTML={{__html: marked(this.state.input)}}/>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    }
}



export default Editor;
