import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    phone: '',
    dob: '',
    gender: '',
    skills: {
      react: false,
      node: false,
      python: false,
    },
    country: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name in formData.skills) {
      setFormData((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <form className="handle-submit"  onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Signup Form</h2>

      <label>Name:
        <input className= "name" type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label><br/>

      <label>Email:
        <input className= "email"  type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label><br/>

      <label>Password:
        <input className= "password" type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label><br/>

      <label>Age:
        <input className= "age"  type="number" name="age" value={formData.age} onChange={handleChange} />
      </label><br/>

      <label>Phone:
        <input  className= "phone"  type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </label><br/>

      <label>Date of Birth:
        <input  className= "dob"  type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </label><br/>

      <fieldset>
        <legend>Gender</legend>
        <label><input className= "gender"  type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male</label>
        <label><input className= "gender" type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female</label>
      </fieldset>

      <fieldset className= "skills">
        <legend>Skills</legend>
        <label><input className= "react" type="checkbox" name="react" checked={formData.skills.react} onChange={handleChange} /> React</label>
        <label><input className= "react"  type="checkbox" name="node" checked={formData.skills.node} onChange={handleChange} /> Node</label>
        <label><input className= "react"  type="checkbox" name="python" checked={formData.skills.python} onChange={handleChange} /> Python</label>
      </fieldset>
<label>Country: 
  <select name="country" value={formData.country} onChange={handleChange}>
    <option value="">Select</option>

    <optgroup label="Africa">
      <option value="algeria">Algeria</option>
      <option value="angola">Angola</option>
      <option value="benin">Benin</option>
      <option value="botswana">Botswana</option>
      <option value="burkina_faso">Burkina Faso</option>
      <option value="burundi">Burundi</option>
      <option value="cabo_verde">Cabo Verde</option>
      <option value="cameroon">Cameroon</option>
      <option value="central_african_republic">Central African Republic</option>
      <option value="chad">Chad</option>
      <option value="comoros">Comoros</option>
      <option value="congo_brazzaville">Congo (Brazzaville)</option>
      <option value="congo_kinshasa">Congo (Kinshasa)</option>
      <option value="djibouti">Djibouti</option>
      <option value="egypt">Egypt</option>
      <option value="equatorial_guinea">Equatorial Guinea</option>
      <option value="eritrea">Eritrea</option>
      <option value="eswatini">Eswatini</option>
      <option value="ethiopia">Ethiopia</option>
      <option value="gabon">Gabon</option>
      <option value="gambia">Gambia</option>
      <option value="ghana">Ghana</option>
      <option value="guinea">Guinea</option>
      <option value="guinea_bissau">Guinea-Bissau</option>
      <option value="ivory_coast">Ivory Coast</option>
      <option value="kenya">Kenya</option>
      <option value="lesotho">Lesotho</option>
      <option value="liberia">Liberia</option>
      <option value="libya">Libya</option>
      <option value="madagascar">Madagascar</option>
      <option value="malawi">Malawi</option>
      <option value="mali">Mali</option>
      <option value="mauritania">Mauritania</option>
      <option value="mauritius">Mauritius</option>
      <option value="morocco">Morocco</option>
      <option value="mozambique">Mozambique</option>
      <option value="namibia">Namibia</option>
      <option value="niger">Niger</option>
      <option value="nigeria">Nigeria</option>
      <option value="rwanda">Rwanda</option>
      <option value="sao_tome_and_principe">Sao Tome and Principe</option>
      <option value="senegal">Senegal</option>
      <option value="seychelles">Seychelles</option>
      <option value="sierra_leone">Sierra Leone</option>
      <option value="somalia">Somalia</option>
      <option value="south_africa">South Africa</option>
      <option value="south_sudan">South Sudan</option>
      <option value="sudan">Sudan</option>
      <option value="tanzania">Tanzania</option>
      <option value="togo">Togo</option>
      <option value="tunisia">Tunisia</option>
      <option value="uganda">Uganda</option>
      <option value="zambia">Zambia</option>
      <option value="zimbabwe">Zimbabwe</option>
    </optgroup>

    <optgroup label="Europe">
      <option value="albania">Albania</option>
      <option value="andorra">Andorra</option>
      <option value="armenia">Armenia</option>
      <option value="austria">Austria</option>
      <option value="azerbaijan">Azerbaijan</option>
      <option value="belarus">Belarus</option>
      <option value="belgium">Belgium</option>
      <option value="bosnia_and_herzegovina">Bosnia and Herzegovina</option>
      <option value="bulgaria">Bulgaria</option>
      <option value="croatia">Croatia</option>
      <option value="cyprus">Cyprus</option>
      <option value="czech_republic">Czech Republic</option>
      <option value="denmark">Denmark</option>
      <option value="estonia">Estonia</option>
      <option value="finland">Finland</option>
      <option value="france">France</option>
      <option value="georgia">Georgia</option>
      <option value="germany">Germany</option>
      <option value="greece">Greece</option>
      <option value="hungary">Hungary</option>
      <option value="iceland">Iceland</option>
      <option value="ireland">Ireland</option>
      <option value="italy">Italy</option>
      <option value="kazakhstan">Kazakhstan</option>
      <option value="kosovo">Kosovo</option>
      <option value="latvia">Latvia</option>
      <option value="liechtenstein">Liechtenstein</option>
      <option value="lithuania">Lithuania</option>
      <option value="luxembourg">Luxembourg</option>
      <option value="malta">Malta</option>
      <option value="moldova">Moldova</option>
      <option value="monaco">Monaco</option>
      <option value="montenegro">Montenegro</option>
      <option value="netherlands">Netherlands</option>
      <option value="north_macedonia">North Macedonia</option>
      <option value="norway">Norway</option>
      <option value="poland">Poland</option>
      <option value="portugal">Portugal</option>
      <option value="romania">Romania</option>
      <option value="russia">Russia</option>
      <option value="san_marino">San Marino</option>
      <option value="serbia">Serbia</option>
      <option value="slovakia">Slovakia</option>
      <option value="slovenia">Slovenia</option>
      <option value="spain">Spain</option>
      <option value="sweden">Sweden</option>
      <option value="switzerland">Switzerland</option>
      <option value="turkey">Turkey</option>
      <option value="ukraine">Ukraine</option>
      <option value="united_kingdom">United Kingdom</option>
      <option value="vatican_city">Vatican City</option>
    </optgroup>

    <optgroup label="Asia">
      <option value="afghanistan">Afghanistan</option>
      <option value="armenia">Armenia</option>
      <option value="azerbaijan">Azerbaijan</option>
      <option value="bahrain">Bahrain</option>
      <option value="bangladesh">Bangladesh</option>
      <option value="bhutan">Bhutan</option>
      <option value="brunei">Brunei</option>
      <option value="cambodia">Cambodia</option>
      <option value="china">China</option>
      <option value="cyprus">Cyprus</option>
      <option value="georgia">Georgia</option>
      <option value="india">India</option>
      <option value="indonesia">Indonesia</option>
      <option value="iran">Iran</option>
      <option value="iraq">Iraq</option>
      <option value="israel">Israel</option>
      <option value="japan">Japan</option>
      <option value="jordan">Jordan</option>
      <option value="kazakhstan">Kazakhstan</option>
      <option value="kuwait">Kuwait</option>
      <option value="kyrgyzstan">Kyrgyzstan</option>
      <option value="laos">Laos</option>
      <option value="lebanon">Lebanon</option>
      <option value="malaysia">Malaysia</option>
      <option value="maldives">Maldives</option>
      <option value="mongolia">Mongolia</option>
      <option value="myanmar">Myanmar</option>
      <option value="nepal">Nepal</option>
      <option value="north_korea">North Korea</option>
      <option value="oman">Oman</option>
      <option value="pakistan">Pakistan</option>
      <option value="palestine">Palestine</option>
      <option value="philippines">Philippines</option>
      <option value="qatar">Qatar</option>
      <option value="russia">Russia</option>
      <option value="saudi_arabia">Saudi Arabia</option>
      <option value="singapore">Singapore</option>
      <option value="south_korea">South Korea</option>
      <option value="sri_lanka">Sri Lanka</option>
      <option value="syria">Syria</option>
      <option value="taiwan">Taiwan</option>
      <option value="tajikistan">Tajikistan</option>
      <option value="thailand">Thailand</option>
      <option value="timor_leste">Timor-Leste</option>
      <option value="turkey">Turkey</option>
      <option value="turkmenistan">Turkmenistan</option>
      <option value="united_arab_emirates">United Arab Emirates</option>
      <option value="uzbekistan">Uzbekistan</option>
      <option value="vietnam">Vietnam</option>
      <option value="yemen">Yemen</option>
    </optgroup>
  </select>
</label><br/>


      <label>Bio:
        <textarea className='bio-textarea' name="bio" value={formData.bio} onChange={handleChange} placeholder="Tell us about yourself..." />
      </label><br/>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
