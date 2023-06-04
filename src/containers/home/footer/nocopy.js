import { Component } from "react";
class nocopy extends Component {
    render() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return (
            <div className="row footer-nocopy">
                <p><strong>@NoCopy {currentYear}</strong></p>
            </div>
        );
    }
}

export default nocopy;
