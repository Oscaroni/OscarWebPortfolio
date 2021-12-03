import React, { Component } from 'react';
import { SkillBlock } from './SkillBlock';

export class SkillBlockLayout extends Component {
    static displayName = SkillBlockLayout.name;

    constructor(props) {
        super(props);
        this.state = { skillblocks: []};
    }

    componentDidMount() {
        this.populateSkillBlockData();
    }

    async populateSkillBlockData() {
        const response = await fetch('datafactory');
        const data = await response.json();
        this.setState({ skillblocks: data});
    }

    render() {
        return (
            <div>
                {this.state.skillblocks.map((b, i) => <SkillBlock
                    title={this.state.skillblocks[i].title}
                    company={this.state.skillblocks[i].company}
                    description={this.state.skillblocks[i].description}
                    date={this.state.skillblocks[i].date}
                    imageurl={this.state.skillblocks[i].imageURL}
                    key={"Skillblock" + i} />)}
            </div>
        );
    }
}
