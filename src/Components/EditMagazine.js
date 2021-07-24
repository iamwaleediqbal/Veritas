import React from 'react';
import Header from './Header';
import '../css/Header.css';
import '../css/Login.css';
import '../css/style.css';
import '../css/book.css';
import fireBaseApp from '../config/configdb';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import eventBus from './EventBus';
class EditMagazine extends React.Component{
    constructor(){
        super();
        this.myRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        const data = JSON.parse(localStorage.getItem("data"));
        console.log(data);
        this.state = {
            id:data.bookid,
            issue_date:data.issue_date,
            description: data.description,
            title: data.title,
            photo_url:data.photo_url,
            mag_url:data.mag_url,
            src: null,
        };
    
    }
    

    componentDidMount(){
        eventBus.on("dataSent",(data) => this.setState({
            author:data.authors,
            genre:data.genres,
            synopsis: data.synopsis,
            title: data.title,
            photo_url:data.photo_url,
        }))
    }
    componentWillUnmount() {
        eventBus.remove("dataSent");
    }
    images = [];
    handleChange = e =>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.images.push(image);
            console.log(this.images);
            this.setState(() => ({image}));

        }
    };
    handleUpload = async(e) =>{
        e.preventDefault(); // <- prevent form submit from reloading the page
        const db = fireBaseApp.firestore();
        
        
        const response = db.collection("magazines");
        const {image} = this.state;
        if(this.images.length > 0){
            fireBaseApp.storage().ref(`magazines/covers/${this.images[0].name}`).put(this.images[0]);
            fireBaseApp.storage().ref(`magazines/ebooks/${this.images[1].name}`).put(this.images[1]);
        }
        fireBaseApp
        .firestore()
        .collection('magazines').doc(this.state.id)
        .update({
            photo_url: this.images.length === 0 ? this.state.photo_url :this.images[0].name,
            mag_url: this.images.length === 0 ? this.state.mag_url :this.images[1].name,
            issue_date:  this.state.issue_date,
            description:this.state.description,
            title:this.state.title,
            

        })
        
        localStorage.setItem("data","");
        this.props.history.push("/dashboard");

    }
    
    addMessage = (e) =>{
        e.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        
        const db = fireBaseApp.firestore();
        console.log(this.state);
        const img = fireBaseApp.storage();
        img.ref();
        let id = this.state.id;
        db.collection('magazines').doc(this.state.id)
        .update({
            photo_url: this.images[0].name,
            mag_url: this.images[1].name,
            issue_date:  this.state.issue_date,
            description:this.state.description,
            title:this.state.title,
            

        });
        
         
      }

    render(){
        const { location, history } = this.props;
        return(
            <div> 
                <Header/>
                <div className = "bookbody">
               <h3 align = 'center' className = "heading" >Update Magazine {this.state.title}</h3>
                <div className="container" id="container">
                    <div className=" form-container log-in-container">
                        <form className = "bookForm"onSubmit={this.addMessage.bind(this)}><br/><br/>
                            <input className = "inputcat" value = {this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} type="text" placeholder="Magazine Title" />
                            <br/>
                            <input className = "inputcat" type="date" value = {this.state.issue_date} onChange={(e) => { this.setState({ issue_date: e.target.value }) }} placeholder="Issue Date" />
                            <br/>
                            <input className = "inputcat"type="text" value = {this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} placeholder="Description" />
                        </form>
                    </div>
                    <div className="overlay-container uc">
                        {/* <form action="#"><br/><br/><br/>
                            
                            <button style = {{margin:"0px 20px 20px 50px"}} onClick={() => document.getElementById('getFile').click()}>Upload Cover Image</button>
                            <input type="file" id="getFile" style={{display:"none"}} name = "Upload Image" placeholder="Upload Image"  onChange={this.handleChange}  /><br/><br/>
                        
                             
                            <button onClick={() => document.getElementById('getFile').click()}>Upload EPUB</button>
                            <input type="file" id="getFile" style={{display:"none"}} name = "Upload Image" placeholder="Upload Image"  onChange={this.handleChange}  /><br/><br/>
                            <button style = {{margin:"200px 20px 20px 50px"}}className = "BookButton"type = "submit" onClick = {this.handleUpload} >Upload <img src={"/Assets/upp.png"} /></button>
                        
                        </form> */}
                        <form action="#"><br/><br/><br/>
                            <label >Upload Cover Image</label>
                            <input type="file" style = {{margin:"0px 20px 20px 50px"}} name = "Upload Image" placeholder="Upload Image" value = {this.image} onChange={this.handleChange}  /><br/><br/>
                            <label >Upload EPUB</label>
                            <input style = {{margin:"0px 20px 20px 50px"}}type="file" name = "Upload Image" placeholder="Upload Image" value = {this.image} onChange={this.handleChange}  /><br/><br/><br/><br/>
                            <button className = "BookButton"type = "submit" onClick = {this.handleUpload} >Upload <img src={"/Assets/upp.png"} /></button>
                        </form>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}
export default EditMagazine;