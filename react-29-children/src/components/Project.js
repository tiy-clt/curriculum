import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // In practice, you'd want to either populate this
            // from an API or store it in an external file.
            projects: [
                { id: 0, name: 'Calculator' },
                { id: 1, name: 'Snippets' },
                { id: 2, name: 'Gabble' },
            ],
        };
    }

    render() {
        const rp = this.props.match.params; // alias for route params
        const project = this.state.projects[rp.id];

        return (
            <div>The {project.name} Project</div>
        );
    }
}

export default Project;