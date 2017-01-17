'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
 
class Article extends React.Component {

    render() {
        return <div className="news_block">
            <img src={this.props.image} alt={this.props.title} className="news_block__img"/>
            <h2 className="news_block__title">{this.props.title}</h2>
            <p className="news_block__description">
                {this.props.body}
            </p>
            <div className="news_block__footer">
                <span className="news_block__author">&copy; {this.props.author}</span>
                <span className="news_block__date">{this.props.date}</span>
            </div>
        </div>;
    }
}

class Articles extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            articles: []
        };
    }

    componentWillMount() {
        fetch('http://localhost:3000/articles')
            .then(res => {
                return res.json();
            })
            .then(data => {
                const articles = data;
                this.setState({ articles });
            });
    }

    render() {
        return <div>
                {this.state.articles.map((article) => <Article {...article} />)}
                <form method='post'>
                    <label for="title">title:</label>
                    <input type='text' name='title' id="title"/>
                    <label for="author">author:</label>
                    <input type='text' name='author' id="author"/>
                    <label for="article">article:</label>
                    <textarea type='text' name='article' id="article"></textarea>
                    <label for="image">image:</label>
                    <input type='text' name='image' id="image"/>
                    <button type='submite'>Submit</button>
                </form>
            </div>;
    }
}
 
ReactDOM.render(<Articles />, document.getElementById('root'));