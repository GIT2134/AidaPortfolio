import React from "react";
import "./Sections.css";
import SectionItem from "./SectionItem";

function Sections() {
  return (
    <>
      <div className=" sections ">
        <h1>A Collection of Engaging Projects</h1>
        <div className="sectionscontainer">
          <div className="sectionswrapper">
            <ul className="sectionsitems">
              <SectionItem
                src="../images/Android.png"
                text="Java-Based Android Application Design"
                text2=" Designed and tested a Java-based Android app for water
                quality monitoring"
                text3="Utilized Firebase as a Realtime cloud-hosted NoSQL Database
                for efficient data storage"
                buttontext1="Java"
                buttontext2="C"
                buttontext3="Agile"
                buttontext4="Scrum"
                buttontext5="Git"
                buttontext6="Balsamiq Wireframes"
                buttontext7="Software Development"
                buttontext8="Firebase Database"
                label="Android"
                path="https://github.com/GIT2134/Aida-Portfolio/tree/main/Android%20Application%20Design"
              />

              <SectionItem
                src="images/websitedesign.png"
                text="Web Development Design"
                text2=" Designed and implemented a website using web development
                technologies"
                text3="Developed a user-friendly website using coding skills that works well on all devices, like phones and computers "
                buttontext1="React"
                buttontext2="Node.js"
                buttontext3="JavaScript"
                buttontext4="Visual Studio"
                buttontext5="CSS"
                buttontext6="HTML"
                buttontext7="Web Development"
                buttontext8="Web Design"
                label="Web"
                path="/"
              />
            </ul>
            <ul className="sectionsitems">
              <SectionItem
                src="images/Databases.png"
                text="Databases"
                text2=" Created and implemented relational database designs, using
                SQL and MySQL"
                text3="Implemented defining constraints, and wrote DDL and DML SQL
                queries and scripts "
                buttontext1="RDBMS"
                buttontext2="SQL"
                buttontext3="MySQL"
                buttontext4="DBeaver"
                buttontext5="Toad"
                buttontext6="HTML"
                buttontext7="MySQL Workbench"
                buttontext8="Normalization/De-Normalization"
                label="RDBMS"
                path="https://github.com/GIT2134/Aida-Portfolio/tree/main/Databases"
              />

              <SectionItem
                src="images/AI.png"
                text="Artificial Intelligence"
                text2=" Explored text classification with Machine Learning (ML)
                algorithms, using a large dataset and Python"
                text3=" Executed an 80% training and 20% testing data split strategy
                for a machine learning model "
                buttontext1="Python"
                buttontext2="PyCharm Professional"
                buttontext3="Jupyter Notebook"
                buttontext4="Git"
                buttontext5="Software Development"
                buttontext6="Programming Languages"
                buttontext7="NumPy"
                buttontext8="Pandas"
                label="AI"
                path="https://github.com/GIT2134/Aida-Portfolio/tree/main/Artificial%20Intelligence"
              />
            </ul>
            <ul className="sectionsitems">
              <SectionItem
                src="images/designingweb.png"
                text=" Job search Website Design "
                text2=" Designed and implemented a prototype job search website
               "
                text3="  Allowing user to enter their job title, location, job
                category and search"
                buttontext1="React"
                buttontext2="Node.js"
                buttontext3="JavaScript"
                buttontext4="Visual Studio"
                buttontext5="CSS"
                buttontext6="HTML"
                buttontext7="Web Development"
                buttontext8="Web Design"
                label="Web"
                path="/"
              />
              <SectionItem
                src="images/capstone.png"
                text="Printer Switch Capstone Design"
                text2=" Designed and implemented a C-programmed switch for
                interfacing RS-232 inputs with a USB printer"
                text3="Accomplished the selection, planning, design, prototyping,
                and delivery of the final product "
                buttontext1="C"
                buttontext2="Atlassian Jira"
                buttontext3="Agile"
                buttontext4="Scrum"
                buttontext5="Git"
                buttontext6="Software Development"
                buttontext7="Programming Language"
                buttontext8="Time Management"
                label="Coding"
                path="https://github.com/GIT2134/Aida-Portfolio/tree/main/Printer%20Switch%20Capstone%20Design"
              />
              <SectionItem
                src="images/network.png"
                text="Communication Networks and Protocols"
                text2=" Implemented a file transfer system in a Linux environment
                using Python"
                text3="Designed the system to include one server capable of
                efficiently handling multiple clients "
                buttontext1="Python"
                buttontext2="Linux"
                buttontext3="Git"
                buttontext4="Networking Protocols (TCP/UDP)"
                buttontext5="Client-Server Model"
                buttontext6="PyCharm"
                buttontext7="Spyder"
                buttontext8="Software Development"
                label="TCP/UDP"
                path="https://github.com/GIT2134/Aida-Portfolio/tree/main/Communication%20Networks%20and%20Protocols"
              />
            </ul>
            <ul className="sectionsitems">
              <SectionItem
                src="images/hover.png"
                text=" Hovercraft Design"
                text2=" Designed a hovercraft using C and Lua programming languages
                "
                text3="Navigated it in a predefined track with three obstacles
                within a 60-second timeframe "
                buttontext1="C"
                buttontext2="Programming Languages"
                buttontext3="Lua"
                buttontext4="Software Development"
                buttontext5="Coppeliasim"
                buttontext6="Arduino IDE"
                buttontext7="Gantt Chart"
                buttontext8="Time Management"
                label="Coding"
                path="https://github.com/GIT2134/Aida-Portfolio/tree/main/Hovercraft%20Design"
              />
              <SectionItem
                src="images/learn.png"
                text="  Software Requirements and Specification"
                text2=" Produced a detailed report including risk analysis,
                requirement validation, and quality assurance (QA)"
                text3=" Utilized Figma to integrate a graphical user interface (GUI) "
                buttontext1="Documentation"
                buttontext2="Presentation"
                buttontext3="Git"
                buttontext4="Figma"
                buttontext5="Graphical User Interface(GUI)"
                buttontext6="Animation Creation"
                buttontext7="Design"
                buttontext8="QA"
                label="GUI"
                path="https://github.com/GIT2134/Aida-Portfolio/tree/main/Software%20Requirements%20and%20Specification"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sections;
