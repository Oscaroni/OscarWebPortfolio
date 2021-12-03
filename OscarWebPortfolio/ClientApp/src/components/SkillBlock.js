import React, { Component } from 'react';
import logo from './Images/kinglogo.jpg';

export class SkillBlock extends Component {
    static displayName = SkillBlock.name;

    render() {
        return (
            <div className="row skillBlock">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src={this.props.imageurl} className="img-fluid rounded-start" alt="Logo" />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.company}</h6>
                                <p className="card-text">{this.props.description}</p>
                                <p className="card-text"><small className="text-muted">{this.props.date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
