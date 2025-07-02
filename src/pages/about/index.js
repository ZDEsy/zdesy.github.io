import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import useContent from "../../content_option";


export const About = () => {
  const { dataabout, meta, worktimeline, skills, services, section } = useContent();
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
                      <h1 className="display-4 mb-4">{ section.about }</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col>
            <div>
                {Array.isArray(dataabout.aboutme) ? (
                    dataabout.aboutme.map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                            <br />
                        </div>
                    ))
                ) : (
                    <p>{dataabout.aboutme}</p>
                )}
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
                      <h3 className="color_sec py-4">{ section.certs }</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
                      <h3 className="color_sec py-4">{ section.skills }</h3>
          </Col>
          <Col lg="7">
                      {skills.map((group, index) => (
                          <div key={index}>
                              <h2 className="category">{group.category}</h2><hr></hr>
                              {group.skills.map((skill, i) => (
                                  <div key={i}>
                                      <h3 className="progress-title">{skill.name}</h3>
                                      <div className="progress">
                                          <div className="progress-bar" style={{ width: `${skill.value}%` }}>
                                              <div className="progress-value">{skill.value}%</div>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                              <br></br>
                          </div>
                      ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
                      <h3 className="color_sec py-4">{ section.lookingfor }</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
