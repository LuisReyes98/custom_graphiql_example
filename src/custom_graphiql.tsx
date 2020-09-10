import React, { Component } from "react";
import GraphiQL from "graphiql";

type CustomGraphiQLProps = {
  fetcher: (graphQLParams: any) => any;
  defaultQuery: string;
};

export default class CustomGraphiQL extends Component<CustomGraphiQLProps> {
  static defaultProps = {
    defaultQuery: "Hello everyone!"
  };
  graphiql: any;

  render() {

    return <GraphiQL
      fetcher={this.props.fetcher}
      defaultQuery={this.props.defaultQuery}
      editorTheme="dracula"
      ref={(c:any) => { this.graphiql = c; }}
    >
      {/* <GraphiQL.Logo>
        Custom GraphiQL
      </GraphiQL.Logo> */}
      {/* <GraphiQL.Toolbar>
        <GraphiQL.Menu label="File" title="File">
          <GraphiQL.MenuItem label="Save" title="Save" />
        </GraphiQL.Menu>
      </GraphiQL.Toolbar> */}
    </GraphiQL>
  }
}
