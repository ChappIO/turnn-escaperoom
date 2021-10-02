import React, {FormEvent, useState} from 'react';
import './RdwForm.css';
import EULogo from './eu_logo.jpeg';
import Toyota from './toyota.jpeg';

function RdwForm() {
    const licensePlate = "GB001B";
    const [license, setLicense] = useState("");
    const [visible, setVisible] = useState("none")

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (license === licensePlate) {
            // show hier content van toyota yaris
            setVisible("block");
        } else {
            alert("Sorry! Dit kenteken kennen wij niet!")
        }
    }

    return (
        <div className="RdwForm">
            <form onSubmit={handleSubmit}>
                <div className="kenteken">
                    <div className="dutchLogo">
                        <img src={EULogo} className="eulogo" alt="EU-logo"/>
                        NL
                    </div>
                    <div className="form">
                        <input type="text"
                               className="kentekenForm"
                               onChange={(e) => setLicense(e.target.value.toUpperCase().replace(/-/g, ""))}
                        />
                    </div>
                </div>
                <div className="submitForm">
                    <button type="submit">Gegevens opvragen</button>
                    <button type="reset" onClick={() => setVisible("none")}>Reset</button>
                </div>
            </form>

            <div className="CarInfo" style={{display: visible}}>
                <table>
                    <tr>
                        <td><img src={Toyota} className="toyota" alt="Toyota Yaris"/></td>
                        <td>
                            <table>
                                <tr>
                                    <td><b>Type:</b></td>
                                    <td>Lease auto</td>
                                </tr>
                                <tr>
                                    <td><b>Kleur:</b></td>
                                    <td>Grijs</td>
                                </tr>
                                <tr>
                                    <td><b>Verbruik:</b></td>
                                    <td>1:15</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default RdwForm;