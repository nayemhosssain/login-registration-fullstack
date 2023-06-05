import React, {useRef} from 'react';
import {Container, Row} from "react-bootstrap";
import {ErrorToast, IsEmpty} from "../../helper/FormHelper";
import {useNavigate} from "react-router-dom";
import {NewTaskRequest} from "../../APIRequest/APIRequest";
const Create = () => {
    let titleRef,authorRef,contentRef =useRef();
    let navigate = useNavigate ();

    const CreateNew = () => {
        let title=titleRef.value;
        let author=authorRef.value;
        let content=contentRef.value;
        if(IsEmpty(title)){
            ErrorToast("Title Required")
        }
        else if(IsEmpty(author)){
            ErrorToast("Author Required")
        }
        else if(IsEmpty(content)){
            ErrorToast("Content Required")
        }
        else {
            NewTaskRequest(title,author,content).then((res)=>{
                if(res===true){
                    navigate("/All")
                }
            })
        }
    }

    return (
        <Container fluid={true} className="content-body">
            <Row className="d-flex justify-content-center">
                <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 >Create New Post</h4>
                            <br/>
                            <input ref={(input)=>titleRef=input} placeholder="Title Name" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <textarea ref={(input)=>authorRef=input}  placeholder="Post Author" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <textarea ref={(input)=>contentRef=input} rows={5} placeholder="Post Content" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <button onClick={CreateNew} className="btn float-end btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};
export default Create;