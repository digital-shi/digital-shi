import React from "react";
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom'

const { Paragraph } = Typography;

const Consent = () => {
    return (
      <div className="consent">
        <Paragraph>
          Do you want us to use the data for academic research purpose?
        </Paragraph>
        <Link to="/digital-shi/questionnaire">
        <Button type="primary" size="large">
            Yes, I agree
        </Button>
      </Link>
      </div>
    );
  }
  
export default Consent;