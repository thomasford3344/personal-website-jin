import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "jinge627@outlook.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:jinge627@outlook.com"
    },
    {
      type: "phone",
      label: "+65 xxxx-xxxx",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+65xxxxxxxx"
    },
    {
      type: "website",
      label: "www.jingejin.com",
      icon: "/images/icon/web-icon.svg",
      link: "https://jinge-jin.vercel.app"
    }
  ],
  socialItems: [
    {
      platform: "dribbble",
      icon: "/images/icon/dribble-icon.svg",
      link: "https://dribbble.com"
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://linkedin.com/in/"
    },
    {
      platform: "facebook",
      icon: "/images/icon/facebook-icon.svg",
      link: "https://facebook.com"
    }
  ]
};


const educationData = {
  education: [
    {
      title: "B.Eng.: Computer Science - 2012",
      description: "National University of Singapore"
    }
  ],
  skills: [
    {
      name: "Teamwork & Communication",
      icon: "/images/home/education-skill/teamwork-icon.svg",
      rating: 5
    },
    {
      name: "Problem Solving",
      icon: "/images/home/education-skill/problem-solving-icon.svg",
      rating: 5
    },
    {
      name: "CI/CD",
      icon: "/images/home/education-skill/ci-cd-icon.svg",
      rating: 5
    },
    {
      name: "AWS",
      icon: "/images/home/education-skill/aws-icon.svg",
      rating: 4
    },
    {
      name: "Azure",
      icon: "/images/home/education-skill/azure-icon.svg",
      rating: 4
    },
    {
      name: "Google Cloud Platform",
      icon: "/images/home/education-skill/gcp-icon.svg",
      rating: 5
    },
    {
      name: "Git",
      icon: "/images/home/education-skill/git-icon.svg",
      rating: 5
    },
    {
      name: "GitHub",
      icon: "/images/home/education-skill/github-icon.svg",
      rating: 5
    },
    {
      name: "Bitbucket",
      icon: "/images/home/education-skill/bitbucket-icon.svg",
      rating: 5
    },
    {
      name: "Docker",
      icon: "/images/home/education-skill/docker-icon.svg",
      rating: 5
    },
    {
      name: "Terraform",
      icon: "/images/home/education-skill/terraform-icon.svg",
      rating: 5
    },
    {
      name: "Ansible",
      icon: "/images/home/education-skill/ansible-icon.svg",
      rating: 4
    },
    {
      name: "Kubernetes",
      icon: "/images/home/education-skill/kubernetes-icon.svg",
      rating: 5
    },
    {
      name: "Jenkins",
      icon: "/images/home/education-skill/jenkins-icon.svg",
      rating: 5
    },
    {
      name: "Grafana",
      icon: "/images/home/education-skill/grafana-icon.svg",
      rating: 5
    },
    {
      name: "Bash",
      icon: "/images/home/education-skill/bash-icon.svg",
      rating: 5
    },
    {
      name: "Powershell",
      icon: "/images/home/education-skill/powershell-icon.svg",
      rating: 5
    },
    {
      name: "Agile/Scrum",
      icon: "/images/home/education-skill/agile-scrum-icon.svg",
      rating: 5
    },
    {
      name: "Python",
      icon: "/images/home/education-skill/python-icon.svg",
      rating: 5
    },
    {
      name: "Java",
      icon: "/images/home/education-skill/java-icon.svg",
      rating: 4
    },
    {
      name: "Nodejs",
      icon: "/images/home/education-skill/nodejs-icon.svg",
      rating: 5
    }
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "Dribble",
      href: "/"
    },
    {
      title: "Facebook",
      href: "/"
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "jinge627@outlook.com",
      link: "mailto:jinge627@outlook.com"
    },
    {
      type: "phone",
      label: "+65 xxxx-xxxx",
      link: "tel:+65xxxxxxxx"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
