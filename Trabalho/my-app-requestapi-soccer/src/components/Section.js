import React from "react";

const Section = ()=> {
    return (
        <section className="content">
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper iframe-mode bg-dark" data-widget="iframe" data-auto-dark-mode="true" data-loading-screen={750}>
                <div className="tab-content">
                    <div className="tab-empty">
                        <iframe className="display-4" ></iframe>
                        <h2 className="display-4">No tab selected!</h2>
                    </div>
                    <div className="tab-loading">
                        <div>
                            <h2 className="display-4">Tab is loading <i className="fa fa-sync fa-spin" /></h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.content-wrapper */}
        </section>
    );
}

export default Section;