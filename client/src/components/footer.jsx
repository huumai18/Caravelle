import { Button } from "@mui/material";

export const Footer = () => {
  return (
    <div className="footer container">
      <div className="left-footer">
        <div className="left-text">
          <h2>Ready to get started?</h2>
          <p>
            Lorem ipsum dolar sot amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="left-button">
          <Button className="button">Start Order Now</Button>
        </div>
      </div>
      <div className="right-footer">
        <div className="right-links">
          <p>
            <span>Navigation</span>
          </p>
          <ul>
            <li>
              <a href="/">Email Marketing</a>
            </li>
            <li>
              <a href="/">Campaigns</a>
            </li>
            <li>
              <a href="/">Branding</a>
            </li>
            <li>
              <a href="/">Offline</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
