import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-training-internship',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './training-internship.component.html',
  styleUrl: './training-internship.component.css'
})
export class TrainingInternshipComponent {
  public courceDetails = [
    {
      name : "AI/ML Research Intern",
      description : "Learn the Fundamentals and Grow Your Generative AI (GenAI) Skill Set.",
      icon: "assets/artificial-intelligence4.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
      ]
    },
    {
      name : "AI/ML Intern with Front-end Development",
      description : "Dive into the world of Python, versatile and powerful programming language.",
      icon: "assets/artificial-intelligence2.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
      ]
    },
    {
      name : "GenAI intern",
      description : "Dive into the world of Python, versatile and powerful programming language.",
      icon: "assets/artificial-intelligence3.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
      ]
    },
    {
      name : "Computer Vison Intern",
      description : "Dive into the world of Python, versatile and powerful programming language.",
      icon: "assets/ComputerVison.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
      ]
    },
    {
      name : "Data Analyst",
      description : "Dive into the world of Python, versatile and powerful programming language.",
      icon: "assets/data-analyst.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
      ]
    },
    {
      name : "Machine Learning Intern",
      description : "Dive into the world of Python, versatile and powerful programming language.",
      icon: "assets/artificial-intelligence.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
      ]
    },
    {
      name : "CyberAI Intern",
      description : "Dive into the world of Python, versatile and powerful programming language.",
      icon: "assets/artificial-intelligence5.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
      ]
    },
 {
      name : "VAPT Intern",
      description : "Dive into the world of Python, versatile and powerful programming language.",
      icon: "assets/testing.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
      ]
    },

 {
      name : "Penetration Tester Intern",
      description : "Dive into the world of Python, versatile and powerful programming language.",
      icon: "assets/testing2.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
      ]
    },

    {
      name : "Security Analyst Intern",
      description : "Become proficient in Java, a robust and widely-used programming language.",
      icon: "assets/security.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
      ]
    }
  ];
  public cardClass = "";
  constructor() {
    console.log('Component initialized');
    const numberOfCources = this.courceDetails.length;
    if (numberOfCources <= 3) {
      this.cardClass = "col-md-" + (12/numberOfCources)
    }
    else this.cardClass = "col-xl-4 col-lg-6 col-md-6";
    console.log(this.cardClass)
  }
}
