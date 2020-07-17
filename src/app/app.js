import React, { useState }from 'react';
import Tag from '../components/tag/tag';

import './app.scss';


const App = () => {
  const [isUsingFocusVisible, setUsingFocusVisible] = useState(false);

  const onCheckBoxChange = (event) => {
    const { checked } = event.target;
    setUsingFocusVisible(checked);
  };

  const buildClassList = (base) => {
    let list = base;
    if (isUsingFocusVisible) {
      list = `${ list } use-focus-visible`;
    }
    return list;
  }

  const render = () => (
    <main className="app">
      <div className="content">
        <h1>Using Create React App and focus-visible</h1>
        <p>This page contains the most common HTML elements. Use <kbd>TAB</kbd> to navigate and see where the focus ring is applied by default by a browser.</p>

        <input
          type="checkbox"
          id="focusVisibleCheckbox"
          defaultChecked={ isUsingFocusVisible }
          onChange={ onCheckBoxChange }
        />
        <label
          className="main-checkbox-label"
          htmlFor="focusVisibleCheckbox"
        >Use <code>focus-visible</code></label>
        <p>Check this box to see how <code>focus-visible</code> handles focus.</p>
        <p><a href="https://github.com/WICG/focus-visible">Read more about this polyfill's rationale</a>.</p>
      </div>

      <div className={ buildClassList('content') }>
        {/* HEADINGS START */}
        <section>
          <h2><u>HEADINGS</u></h2>
          <h1>Heading 1 <Tag name="h1"/></h1>

          <h2>Heading 2 <Tag name="h2"/></h2>

          <h3>Heading 3 <Tag name="h3"/></h3>

          <h4>Heading 4 <Tag name="h4"/></h4>

          <h5>Heading 5 <Tag name="h5"/></h5>

          <h6>Heading 6 <Tag name="h6"/></h6>
        </section>
        {/* HEADINGS END */}

        {/* TEXT BLOCKS START */}
        <section>
          <h2><u>TEXT BLOCKS</u></h2>

          <div>
            <h3><u>PARAGRAPH</u> <Tag name="p"/></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non suscipit temporibus velit. Ipsam odio maxime ipsum quia rerum voluptatum expedita temporibus. Ad dolorem nemo voluptatibus porro ducimus iste quo!</p>
          </div>

          <div>in
            <h3><u>QUOTE</u> <Tag name="blockquote"/></h3>
            <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non suscipit temporibus velit. Ipsam odio maxime ipsum quia rerum voluptatum expedita temporibus. Ad dolorem nemo voluptatibus porro ducimus iste quo!</blockquote>
          </div>

          <div>
            <h3><u>PRE</u> <Tag name="pre"/></h3>
            <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non suscipit temporibus velit. Ipsam odio maxime ipsum quia rerum voluptatum expedita temporibus. Ad dolorem nemo voluptatibus porro ducimus iste quo!</pre>
          </div>

          <div>
            <h3><u>CODE</u> <Tag name="code"/></h3>
            <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non suscipit temporibus velit. Ipsam odio maxime ipsum quia rerum voluptatum expedita temporibus. Ad dolorem nemo voluptatibus porro ducimus iste quo!</code>
          </div>

          <div>
            <h3><u>UNORDERED LIST</u> <Tag name="ul"/></h3>
            <ul>
              <li>unordered list item</li>
              <li>unordered list item</li>
              <li>unordered list item</li>
            </ul>
          </div>

          <div>
            <h3><u>ORDERED LIST</u> <Tag name="ol"/></h3>
            <ol>
              <li>ordered list item</li>
              <li>ordered list item</li>
              <li>ordered list item</li>
            </ol>
          </div>

          <div>
            <h3><u>TABLE</u> <Tag name="table"/></h3>
            <table>
              <tbody>
                <tr>
                  <th>heading</th>
                  <th>heading</th>
                  <th>heading</th>
                </tr>
                <tr>
                  <td>cell</td>
                  <td>cell</td>
                  <td>cell</td>
                </tr>
                <tr>
                  <td>cell</td>
                  <td>cell</td>
                  <td>cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* TEXT BLOCKS END */}

        {/* INTERACTIVE ELEMENTS START */}
        <section>
          <h2><u>INTERACTIVE ELEMENTS</u></h2>

          <h3><u>ANCHOR</u> <Tag name="a"/></h3>
          <div>
            <a href="#">hyperlink</a>
          </div>

          <h3><u>BUTTONS</u> <Tag name="button"/></h3>
          <div>
            <button type="button">button</button>
          </div>
          <div>
            <button type="menu">menu button</button>
          </div>
          <div>
            <button type="reset">reset button</button>
          </div>
          <div>
            <button type="submit">submit button</button>
          </div>
        </section>
        {/* INTERACTIVE ELEMENTS END */}

        {/* FORM ELEMENTS START */}
        <section>
          <h2><u>FORM ELEMENTS</u></h2>

          <form action="">
            <div>
              <fieldset>
                <legend>fieldset legend - text input</legend>
                <label htmlFor="textInput">text input label:</label>
                <input
                  type="text"
                  id="textInput"
                />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - text area</legend>
                <label htmlFor="textArea">text area label:</label>
                <textarea
                  name=""
                  id="textArea"
                  cols="30"
                  rows="10"
                ></textarea>
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - email input</legend>
                <label htmlFor="emailInput">email input label:</label>
                <input
                  type="email"
                  name=""
                  id="emailInput"
                />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - tel input</legend>
                <label htmlFor="telInput">tel input label:</label>
                <input
                  type="tel"
                  name=""
                  id="telInput"
                />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - password input</legend>
                <label htmlFor="passwordInput">password input label:</label>
                <input
                  type="password"
                  name=""
                  id="passwordInput"
                />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - number input</legend>
                <label htmlFor="numberInput">number input label:</label>
                <input
                  type="number"
                  name=""
                  id="numberInput"
                />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - date input</legend>
                <label htmlFor="dateInput">date input label:</label>
                <input
                  type="date"
                  name=""
                  id="dateInput"
                />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - file input</legend>
                <label htmlFor="fileInput">file input label:</label>
                <input
                  type="file"
                  name=""
                  id="fileInput"
                />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - radio input</legend>
                <div>
                  <input
                    type="radio"
                    id="radioInput0"
                    name="radioInput"
                    value="0"
                  />
                  <label
                    className="radio-label"
                    htmlFor="radioInput0"
                  >radio input label</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radioInput1"
                    name="radioInput"
                    value="0"
                  />
                  <label
                    className="radio-label"
                    htmlFor="radioInput1"
                  >radio input label</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="radioInput2"
                    name="radioInput"
                    value="0"
                  />
                  <label
                    className="radio-label"
                    htmlFor="radioInput2"
                  >radio input label</label>
                </div>
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - checkbox input</legend>
                <div>
                  <input
                    type="checkbox"
                    id="checkbox0"
                    name="checkbox"
                    value="0"
                  />
                  <label 
                    className="checkbox-label"
                    htmlFor="checkbox0"
                  >checkbox input label</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox"
                    value="0"
                  />
                  <label
                    className="checkbox-label"
                    htmlFor="checkbox1"
                  >checkbox input label</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="checkbox2"
                    name="checkbox"
                    className="checkbox-label"
                    value="0"
                  />
                  <label
                    className="checkbox-label"
                    htmlFor="checkbox2"
                  >checkbox input label</label>
                </div>
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - select</legend>
                <label htmlFor="selectInput">select label:</label>
                <select name="" id="selectInput">
                  <option value="-1">call to action</option>
                  <option value="0">option</option>
                  <option value="1">option</option>
                  <option value="2">option</option>
                </select>
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - color input</legend>
                <label htmlFor="colorInput">color input label:</label>
                <input
                  type="color"
                  name=""
                  id="colorInput"
                />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>fieldset legend - range input</legend>
                <label htmlFor="rangeInput">range input label:</label>
                <input
                  type="range"
                  name=""
                  id="rangeInput"
                />
              </fieldset>
            </div>

            <input
              type="submit"
              value="submit input"
            />
          </form>
        </section>
        {/* FORM ELEMENTS END */}

        {/* DISPLAY ELEMENTS START */}
        <section>
          <h2><u>DISPLAY ELEMENTS</u></h2>

          <h3><u>PROGRESS</u> <Tag name="progress"/></h3>
          <div>
            <label htmlFor="fileProgress">progress:</label>
            <progress id="fileProgress" max="100" value="70">70%</progress>
          </div>

          <h3><u>HORIZONTAL LINE</u> <Tag name="hr"/></h3>
          <hr />
        </section>
        {/* DISPLAY ELEMENTS END */}
      </div>
    </main>
  );

  return render();
};

export default App;
