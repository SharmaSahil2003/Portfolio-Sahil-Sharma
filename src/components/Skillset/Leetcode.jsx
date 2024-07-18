import React from "react";
import { Container, Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> Stats
      </h1>
      
      {/* <ReactMarkdown>
      ![LeetCode Stats](https://leetcard.jacoblin.cool/sharmazon2003?theme=dark&font=Syne%20Mono&ext=heatmap)
      </ReactMarkdown> */}
      <Container className="leetcode-cont">
        <img className="img-fluid" src="https://leetcard.jacoblin.cool/sharmazon2003?theme=dark&font=Syne%20Mono&ext=heatmap" alt="leetcard"></img>
      </Container>
      
    </Row>
  );
}

export default Leetcode;
