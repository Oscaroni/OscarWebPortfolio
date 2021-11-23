import React, { Component } from 'react';
import logo from './Images/kinglogo.jpg';

export class SkillBlock extends Component {
    static displayName = SkillBlock.name;

    render() {
        return (
            <div class="row skillBlock">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-3">
                            <img src={logo} class="img-fluid rounded-start" alt="Foto" />
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <h5 class="card-title">{this.props.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{this.props.company}</h6>
                                <p class="card-text">{this.props.description}</p>
                                <p class="card-text"><small class="text-muted">{this.props.date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
