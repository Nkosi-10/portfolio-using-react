
import styled from 'styled-components';
import '../App.css';

const Vision = () => {
  return (
    <>
      <StyledWrapper>
        <div className="card">
          <div className="header">
            <div className="top">
              <div className="circle">
                <span className="red circle2" />
              </div>
              <div className="circle">
                <span className="yellow circle2" />
              </div>
              <div className="circle">
                <span className="green circle2" />
              </div>
            </div>
          </div>
          <div className="code-container">
            <div className="area" id="code" name="code">
              <h3>Vision:</h3>
              <p>
                To become a world-class developer, innovating through technology to create impactful
                solutions that make lives easier and more connected.
              </p>
              <h3>Mission:</h3>
              <p>
                To deliver clean, efficient, and scalable software solutions while continuously
                learning and growing. I aim to contribute to projects that promote innovation,
                improve user experiences, and embrace cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 95%; /* Increased width for mobile */
    max-width: 700px; /* Set a max width */
    margin: 15px auto; /* Reduced margin for mobile */
    background-color: rgb(21, 40, 54);
    border-radius: 8px;
    z-index: 1;
    box-shadow: 0px 10px 10px rgb(73, 70, 150);
    transition: 0.5s;
    padding-bottom: 20px; /* Reduced padding for mobile */
    margin-bottom: 20px; /* Reduced margin for mobile */
  }

  .card:hover {
    transform: translateY(-7px);
    box-shadow: 0px 10px 10px black;
  }

  .top {
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  .circle {
    padding: 0 4px;
  }

  .circle2 {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 5px;
  }

  .red {
    background-color: #ff605c;
  }

  .yellow {
    background-color: #ffbd44;
  }

  .green {
    background-color: #00ca4e;
  }

  .header {
    margin: 5px;
    margin-top: 5px;
    border-radius: 5px;
  }

  .code-container {
    padding: 0.75rem; /* Reduced padding for mobile */
    text-align: justify;
  }

  .code-container p {
    display: flex;
  }

  h3 {
    display: flex;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 0.9rem; /* Smaller font for mobile */
  }

  #code {
    width: 100%; /* Adjust width dynamically */
    height: auto;
    resize: none;
    background-color: rgb(29, 65, 90);
    border-radius: 5px;
    border: none;
    color: white;
    padding: 8px; /* Reduced padding for mobile */
    font-size: 0.8rem; /* Smaller font for mobile */
  }

  #code:focus {
    outline: none !important;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .card {
      width: 98%;
      margin: 10px auto;
      padding-bottom: 15px;
    }
    .code-container {
      padding: 0.5rem;
    }
    h3 {
      font-size: 0.85rem;
    }
    p {
      font-size: 0.75rem;
    }
    #code {
      padding: 6px;
      font-size: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 100%;
      box-shadow: none;
      margin: 5px auto;
      padding-bottom: 10px;
    }
    .code-container {
      padding: 0.4rem;
    }
    h3 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.7rem;
    }
    #code {
      padding: 5px;
      font-size: 0.7rem;
    }
  }
`;

export default Vision;

