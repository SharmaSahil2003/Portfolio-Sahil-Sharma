import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { VscDebugBreakpointLog } from "react-icons/vsc";
import {Container} from 'react-bootstrap';


function Test() {
  return (
    <Container fluid className="home-cont edu-section">
      <Container>
    <Tabs>
    <TabList>
      <Tab>Education</Tab>
      <Tab>Achievements</Tab>
    </TabList>
    <TabPanel>
    <div className="work-edu">
        <h3><VscDebugBreakpointLog/><span className="yellow">Pune Institute of Computer Technology, Pune</span></h3>
        <div style={{paddingLeft:"50px"}}>
        <p className="info">
        
        <span>&bull;</span>Bachelors in Computer Engineering <em className="date">(Dec 2021</em> - <em className="date">July 2025)</em></p>
        </div>
    </div>

    <div className="work-edu">
        <h3><VscDebugBreakpointLog/><span className="yellow">SSH Junior College, Navi Mumbai</span></h3>
        <div style={{paddingLeft:"50px"}}>
        <p className="info">
        
        <span>&bull;</span>12th HSC 88.33% <em className="date">(2021)</em></p>
        </div>
    </div>
    <div className="work-edu">
        <h3><VscDebugBreakpointLog/><span className="yellow">Ryan International School, Navi Mumbai</span></h3>
        <div style={{paddingLeft:"50px"}}>
        <p className="info">
        
        <span>&bull;</span>10th CBSE 91.8% <em className="date">(2019)</em></p>
        </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="work-edu">
        <ul className="info"><br/>
            <li> Awarded the Redington Scholarship, securing a highly competitive position among a select group of
            students and gaining valuable funding for education.</li><br/>
            <li> Solved over 800+ LeetCode questions, demonstrating strong problem-solving skills.</li><br/>
            <li>Taluka level topper for 12th Science CBSE Examination.</li><br/>
            <li>Microsoft Certified-Data Analyst Associate.</li><br/>
        </ul>
        </div>
    </TabPanel>
  </Tabs>
  </Container>
          </Container>
  );
}

export default Test;