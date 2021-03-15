import React from "react";
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography;

const references = [
  {
    authors: "Rinkel, R. N., Leeuw, I. M. V. D., van Reij, E. J., Aaronson, N. K., & Leemans, C. R.",
    year: "2008",
    title: "Speech Handicap Index in patients with oral and pharyngeal cancer: better understanding of patients' complaints. Head & Neck: Journal for the Sciences and Specialties of the Head and Neck"
  }
]

const Home = () => {
  
  return (
    <div className="home">
      <Title> Digital Speech Handicap Index (SHI) </Title>
      <Paragraph>
        These are some statements that many people may have used to describe their speech and the effects of
        their speech on their lives. Please tick the response that indicates how frequently you have the same experience.
      </Paragraph>
      <Link to="/shi-questionnaire/consent">
        <Button type="primary" size="large">
            Take the SHI Questionnaire
        </Button>
      </Link>
    </div>
  );
}

export default Home;