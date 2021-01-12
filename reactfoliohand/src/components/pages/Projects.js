
import React from "react";
import Container from "../Container";
import Row from "../Row";
import Card from "../ContactButtons";
import SectionHeader from "../SectionHeader";
import ContactButtons from "../Cards";
import "../Projects.json"

import MyProjects from "../Projects.json";

function Projects() {
  return (
    <Container>
      <Row>
        <SectionHeader header="Projects" />
      </Row>
      <Row rowID="project-row">
        {MyProjects.map((item, index) => (
          <Card project={item} key={index} />
        ))}
      </Row>
      <Row>
        <ContactButtons />
      </Row>
    </Container>
  );
}

export default Projects;