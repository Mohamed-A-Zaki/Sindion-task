import "./IssueSubject.scss";
import { Col, Image, Row } from "react-bootstrap";
import attachment_image from "../../../assets/Rectangle 12464.png";

export default function IssueSubject() {
  return (
    <div className="issue-subject p-4">
      <div className="title sub_title_small">Issue Subject</div>
      <p className="my-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book not only fiv... It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
      </p>

      <div className="attachment">
        <div className="title">
          Attachments: <span>(3)</span>
        </div>

        {/* start files */}
        <div className="files">
          <div className="small_text_1 my-3">Files:</div>
          <Row xs={1} xxl={2} className="g-2">
            {[...new Array(2)].map((_, indx) => (
              <Col key={indx}>
                <div className="item d-flex align-items-center rounded-3 border overflow-hidden">
                  <div className="thumbnail flex-shrink-0 bg-danger d-flex align-items-center justify-content-center text-white">
                    pdf
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="file-name">FileName.Pdf</div>
                    <div className="file-size">23.09 MB</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {/* end files */}

        {/* start images */}
        <div className="images">
          <div className="small_text_1 my-3">Images:</div>
          <Row xs={1} xxl={2} className="g-2">
            <Col>
              <div className="item d-flex align-items-center rounded-3 border overflow-hidden">
                <div className="flex-shrink-0 bg-danger d-flex align-items-center justify-content-center text-white">
                  <Image src={attachment_image} />
                </div>
                <div className="flex-grow-1 ms-3">
                  <div className="file-name">FileName.jpg</div>
                  <div className="file-size">23.09 MB</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* end images */}
      </div>
    </div>
  );
}
