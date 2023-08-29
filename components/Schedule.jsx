"use client";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const Schedule = () => {
  // State to manage the number of rows displayed for each table
  const [showRowsTable1, setShowRowsTable1] = useState(false);
  const [showRowsTable2, setShowRowsTable2] = useState(false);

  // Function to toggle the display of more rows for table 1
  const toggleRowsTable1 = () => {
    setShowRowsTable1(!showRowsTable1);
  };

  // Function to toggle the display of more rows for table 2
  const toggleRowsTable2 = () => {
    setShowRowsTable2(!showRowsTable2);
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse mx-2 lg:mx-16 justify-center gap-5 my-10">
        <div className="lg:w-[50%]">
          <Slide triggerOnce direction="left">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 text-[#010101]">
              Tentative Proposed Agenda for Kenya Dns
            </h1>
          </Slide>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <b>
            <h2 className="text-center">Day One – 1st November 2023</h2>
          </b>
          <table id="filterTable">
            <tr className="header">
              <th style={{ width: "60%" }}>Time</th>
              <th style={{ width: "40%" }}>Session and Topic</th>
            </tr>
            {showRowsTable1 ? (
              <>
                <tr>
                  <td>7.00am -8.00am</td>
                  <td>Breakfast and Registration</td>
                </tr>
                <tr>
                  <td>8:00am-8:10am</td>
                  <td>Welcoming remarks – KeNIC CEO:</td>
                </tr>
                <tr>
                  <td>8.10am – 8.25am</td>
                  <td>Welcoming remarks – KeNIC Chairman:</td>
                </tr>
                <tr>
                  <td>8.25am – 8.40am</td>
                  <td>
                    Keynote speech – International delegate:About Cybersecurity
                  </td>
                </tr>
                <tr>
                  <td>8.45am – 9.00am</td>
                  <td>Keynote speech – The power of domain names</td>
                </tr>
                <tr>
                  <td>9.00am – 9.25am</td>
                  <td>
                    Tour of selected Exhibition Booths by the chief guests
                  </td>
                </tr>
                <tr>
                  <td>9.00am – 9.25am</td>
                  <td>
                    Commercials/Music/Recognition of sponsors on tv screens
                  </td>
                </tr>
                <tr>
                  <td>9.00am – 9.25am</td>
                  <td>Presentation – DNS debunking/ essentials and DNSSEC</td>
                </tr>
                <tr>
                  <td>10.15am- 10.20am</td>
                  <td>
                    SLD Auction- available names/ kick off dates/ value/ closure
                  </td>
                </tr>
                <tr>
                  <td>10.00am – 11.00am</td>
                  <td>
                    Panel discussion 1 – Influencing Governmental Policy on
                    Internet Penetration in East & Rest of Africa
                  </td>
                </tr>
                <tr>
                  <td>11.00am -11.30am</td>
                  <td>
                    Tea Break and Networking Sponsor adverts and marketing
                    opportunity
                  </td>
                </tr>
                <tr>
                  <td>11.30am – 12.45pm</td>
                  <td>
                    Panel discussion 2 – Evaluating the risks and opportunities
                    facing the Domain Name Ecosystem
                  </td>
                </tr>
                <tr>
                  <td>12.45pm – 2.00pm</td>
                  <td>Lunch break and Tour of Exhibition Booth</td>
                </tr>
                <tr>
                  <td>2.00pm – 2.20pm</td>
                  <td>
                    Konza Presentation- Positioning Kenya and the region for
                    growth.
                  </td>
                </tr>
                <tr>
                  <td>2.25pm-3.10pm</td>
                  <td>Sponsor Session/ Presentations</td>
                </tr>
                <tr>
                  <td>3.10pm – 3.20pm</td>
                  <td>Sponsor Adverts and Marketing opportunity</td>
                </tr>
                <tr>
                  <td>3.20pm - 4.20pm</td>
                  <td>Panel Discussion 3 – Monetizing your online presence.</td>
                </tr>
                <tr>
                  <td>4.30pm – 4.40pm</td>
                  <td>Closing remarks – KeNIC CEO</td>
                </tr>
                <tr>
                  <td>4.45pm – 6.30pm</td>
                  <td>
                    Coffee Break and Networking. Sponsor Adverts and Marketing
                    opportunity in the background.
                  </td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td>7.00am -8.00am</td>
                  <td>Breakfast and Registration</td>
                </tr>
              </>
            )}
          </table>

          {/* Show More button */}
          <button
            className="text-blue-500 mt-2 underline cursor-pointer"
            onClick={toggleRowsTable1}
          >
            {showRowsTable1 ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* Add Day Two table */}
        <div className="ml-4">
          <b>
            <h2 className="text-center">Day Two – 2nd November 2023</h2>
          </b>
          <table id="filterTable">
            <tr className="header">
              <th style={{ width: "60%" }}>Time</th>
              <th style={{ width: "40%" }}>Session and Topic</th>
            </tr>
            {showRowsTable2 ? (
              <>
                <tr>
                  <td>7.00am -8.00am</td>
                  <td>Breakfast and Registration</td>
                </tr>
                <tr>
                  <td>8:00am-8:15am</td>
                  <td>Welcoming remarks – KeNIC CEO:</td>
                </tr>
                <tr>
                  <td>8.20am – 9:00am</td>
                  <td>Presentation: DNS and Web 3.0</td>
                </tr>
                <tr>
                  <td>9:00am – 10:00am</td>
                  <td>Panel discussion 1 – Data protection.</td>
                </tr>
                <tr>
                  <td>10:30am – 10:55am </td>
                  <td>
                    Tea Break and Networking Sponsor adverts and marketing
                    opportunity
                  </td>
                </tr>
                <tr>
                  <td>11:00am – 12:45pm</td>
                  <td>
                    Panel discussion 2 – Strengthening collaboration among
                    stakeholders in the domain name ecosystem in Africa
                  </td>
                </tr>
                <tr>
                  <td>12:45pm – 2:00pm</td>
                  <td>Lunch break and Tour of Exhibition Booth</td>
                </tr>
                <tr>
                  <td>2.00pm – 3.00pm</td>
                  <td>Panel discussion 3:– Children’s right</td>
                </tr>
                <tr>
                  <td>3:10pm- 4:15pm</td>
                  <td>Copyrights/Trademarks</td>
                </tr>
                <tr>
                  <td>4:15pm– 4:30pm</td>
                  <td>
                    Closing Session from the Partners <br /> 1. KICTANet <br />
                    2. AFTLD <br />
                    3. The Internet Society <br />
                    4. Konza Technopolis
                    <br /> 5. KeNIC CEO –thank you to our sponsors
                  </td>
                </tr>
                <tr>
                  <td>3:10pm- 4:15pm</td>
                  <td>Copyrights/Trademarks</td>
                </tr>
                <tr>
                  <td>4:30pm – 5:30pm</td>
                  <td>Coffee break Booth Visit & Networking</td>
                </tr>
                <tr>
                  <td>6:00pm – 7.30pm</td>
                  <td>Cocktail</td>
                </tr>
                <tr>
                  <td>7.30pm-9:00pm</td>
                  <td>Gala Dinner</td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td>7.00am -8.00am</td>
                  <td>Breakfast and Registration</td>
                </tr>
              </>
            )}
          </table>

          {/* Show More button */}
          <button
            className="text-blue-500 mt-2 underline cursor-pointer"
            onClick={toggleRowsTable2}
          >
            {showRowsTable2 ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Schedule;
