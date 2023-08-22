import React from "react";
import "./Test.css";
import { FaArrowAltCircleLeft, FaMobileAlt } from "react-icons/fa";
import {
  AiFillPlusCircle,
  AiOutlineEye,
  AiOutlinePrinter,
  AiOutlineMail,
} from "react-icons/ai";
import { SlNotebook } from "react-icons/sl";
import { GrNotes, GrDocumentExcel } from "react-icons/gr";

const Test = () => {
  return (
    <div>
      <div className="test__page">
        <nav className="navbar__farma">
          <aside>
            <span className="nav__first__link">
              <span className="icon__test">
                <FaArrowAltCircleLeft />
              </span>{" "}
              Back
            </span>
            <span className="nav__first__link">B2C</span>
            <span className="nav__first__link">B2B Tax</span>
            <span className="nav__first__link">B2B Supply</span>
            <span className="nav__first__link">Manual</span>
            <span className="nav__first__link">
              <span className="icon__test2">
                <AiFillPlusCircle />
              </span>{" "}
            </span>
          </aside>
          <aside className="bill__doc">Bill Documentation</aside>
        </nav>
        <main className="main__divider">
          <section className="unit__active__reading">
            <article className="unit__mapp">
              <div>
                {" "}
                <p>Unit Mapped</p>
                <p>2/725</p>
              </div>
              <div>
                {" "}
                <p>Active Charges</p>
                <p>7/7</p>
              </div>
              <div>
                {" "}
                <p>Reading</p>
                <p>-/2</p>
              </div>
            </article>
            <article>
              <table className="table__for__all_Unit">
                <tr>
                  <th>
                    {" "}
                    <p className="tower">Billing cycle</p>
                  </th>

                  <th>
                    <p className="tower">Cluster</p>
                  </th>
                </tr>

                <tr>
                  <td>
                    <select name="" id="">
                      <option value="">Nov-21-B2c</option>
                      <option value="">new1</option>
                      <option value="">new1</option>
                    </select>
                  </td>

                  <td>
                    {" "}
                    <select name="" id="">
                      <option value="">AMN</option>
                      <option value="">new1</option>
                      <option value="">new1</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p className="color__green">
                      Billing cycle is Active.{" "}
                      <input type="checkbox" name="" id="" />
                    </p>
                  </th>
                </tr>
                <tr>-</tr>
                <tr>
                  {" "}
                  <th>
                    {" "}
                    <p className="tower"> Tower</p>
                  </th>
                  <th>
                    {" "}
                    <p className="tower"> Unit</p>
                  </th>
                </tr>
                <tr>
                  <td>
                    <select name="" id="">
                      <option value="">Nov-21-B2c</option>
                      <option value="">new1</option>
                      <option value="">new1</option>
                    </select>
                  </td>

                  <td>
                    {" "}
                    <select name="" id="">
                      <option value="">AMN</option>
                      <option value="">new1</option>
                      <option value="">new1</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <input
                    type="text"
                    className="input__width"
                    placeholder="Remark"
                    name=""
                    id=""
                  />
                </tr>
                <tr>
                  <p className="checkbox__h5">
                    <input type="checkbox" /> <h5>Provisional Bill </h5>
                  </p>
                </tr>
              </table>
            </article>
          </section>
          <article className="billing__table__head">
            <table className="billing__table">
              <tr>
                <th colSpan={2}>Billing cycle</th>
              </tr>
              <tr>
                <td>Billing period From | To</td>
                <td>01 Nov 2021 | 30 Nov 2021</td>
              </tr>
              <tr>
                <td>Bill due date</td>
                <td>01 Jan 2022 | 01 Jan 2022</td>
              </tr>
              <tr>
                <td>Consider Payment To </td>
                <td> 30 Nov 2021</td>
              </tr>
              <tr>
                <td>Consider meter reading FROM | To</td>
                <td>01 Nov 2021 | 30 Nov 2021</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </article>
        </main>
        <section className="end__section">
          <aside className="end__section__aside">
            {" "}
            <div className="span__style1">
              <span>
                {" "}
                <span className="icon__test4">
                  <SlNotebook />
                </span>{" "}
                Generate
              </span>
              <span>
                <span className="icon__test4">
                  <AiOutlineEye />
                </span>{" "}
                Preview
              </span>
              <span>
                <span className="icon__test5">
                  <GrDocumentExcel />
                </span>{" "}
              </span>
              <span>
                {" "}
                <span className="icon__test4">
                  <AiOutlinePrinter />
                </span>{" "}
                Print
              </span>
              <span>
                <span className="icon__test5">
                  <GrNotes AiOutlineMail AiOutlineEye FaMobileAlt />
                </span>{" "}
              </span>
            </div>
            <div className="span__style2">
              <span>
                <span className="icon__test4">
                  <AiOutlineMail AiOutlineEye FaMobileAlt />
                </span>{" "}
              </span>
              <span>
                <span className="icon__test5">
                  <AiOutlineEye />
                </span>{" "}
              </span>
              <span>
                <span className="icon__test5">
                  <GrNotes />
                </span>{" "}
              </span>
              <span>
                <span className="icon__test4">
                  <FaMobileAlt />
                </span>{" "}
                SMS
              </span>
              <span>
                <span className="icon__test5">
                  <AiOutlineEye />
                </span>{" "}
              </span>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Test;
