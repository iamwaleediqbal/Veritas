import React from 'react';
import Header from './Header';
import '../css/Header.css';
import '../css/Login.css';
import '../css/style.css';
import '../css/book.css';
import fireBaseApp from '../config/configdb';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
class BookForm extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    state = {
        id:'',
        author:'',
        genre:'',
        synopsis: '',
        title: '',
        src: null
    };

    images = [];
    handleChange = e =>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.images.push(image);
            console.log(this.images);
            this.setState(() => ({image}));

        }
    };
    handleUpload = (e) =>{
        e.preventDefault(); // <- prevent form submit from reloading the page
        
        const {image} = this.state;
        const uploadTask = fireBaseApp.storage().ref(`books/covers/${this.images[0].name}`).put(this.images[0]);
        fireBaseApp.storage().ref(`books/ebooks/${this.images[1].name}`).put(this.images[1]);
        const docId = fireBaseApp
        .firestore()
        .collection('books').doc();
        console.log(docId.id);

        docId.set({
            bookid:docId.id,
            photo_url: this.images[0].name,
            book_url: this.images[1].name,
            authors:  this.state.author.split(', '),
            genres: this.state.genre.split(', '),
            synopsis:this.state.synopsis,
            title:this.state.title,
            publisher:firebase.auth().currentUser.displayName

        })
            
        console.log(image.name);
        this.props.history.push("/dashboard");

    }
    
    addMessage = (e) =>{
        e.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        
        const db = fireBaseApp.firestore();
        console.log(this.state);
        const img = fireBaseApp.storage();
        img.ref()
        db.collection("books").doc().set({
            authors:  this.state.author.split(', '),
            src: this.state.src,
            genres: this.state.genre.split(', '),
            synopsis:this.state.synopsis,
            title:this.state.title,
            publisher:firebase.auth().currentUser.displayName

        });
         
      }

    render(){
        const { location, history } = this.props;
        return(
            <div> 
                <Header/>
                <div className = "bookbody">
               <h3 align = 'center' className = "heading" >Add A Book</h3>
                <div className="container" id="container">
                    <div className=" form-container log-in-container">
                        <form className = "bookForm"onSubmit={this.addMessage.bind(this)}><br/><br/>
                            <input className = "inputcat" value = {this.title} onChange={(e) => { this.setState({ title: e.target.value }) }} type="text" placeholder="Book Title" />
                            <br/>
                            <input className = "inputcat" type="text" value = {this.author} onChange={(e) => { this.setState({ author: e.target.value }) }} placeholder="Author1, Author2, ..." />
                            <br/>
                            <input className = "inputcat"type="text" value = {this.genre} onChange={(e) => { this.setState({ genre: e.target.value }) }} placeholder="Genre1, Genre2, ..." />
                            <br/>
                            <input className = "inputcat"type="text" value = {this.synopsis} onChange={(e) => { this.setState({ synopsis: e.target.value }) }} placeholder="Synopsis" />
                        </form>
                    </div>
                    <div className="overlay-container uc">
                        <form action="#"><br/><br/><br/>
                            <label >Upload Cover Image</label>
                            <input type="file"  name = "Upload Image" placeholder="Upload Image" value = {this.image} onChange={this.handleChange}  /><br/><br/>
                            <label >Upload EPUB</label>
                            <input type="file" name = "Upload Image" placeholder="Upload Image" value = {this.image} onChange={this.handleChange}  /><br/><br/><br/><br/>
                            <button className = "BookButton"type = "submit" onClick = {this.handleUpload} >Upload <img src={"/Assets/upp.png"} /></button>
                        </form>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}
export default withRouter(BookForm);