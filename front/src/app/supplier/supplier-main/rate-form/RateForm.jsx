import React, { PureComponent } from "react";

import "./RateForm.less";
import RegisterForm from "./../../../common/register-form/RegisterForm";

export default class RateForm extends PureComponent {
  render() {
    const formSchema = {
      type: "object",
      required: ["name", "type", "price"],
      additionalProperties: false,
      properties: {
        name: {
          title: "Name",
          type: "string",
          minLength: 2,
          maxLength: 100,
          pattern: "^[a-zA-Z]+$"
        },
        type: {
          title: "Type",
          type: "string"
        },
        price: {
          title: "Price",
          type: "string"
        }
      }
    };

    const uiSchema = {
      name: {
        "ui:placeholder": "John Doe"
      },
      currency: {
        // "ui:widget": "",
        "ui:placeholder": "..."
      },
      price: {
        "ui:placeholder": "0"
      }
    };

    return (
      <div className="rate-form">
        <RegisterForm formSchema={formSchema} uiSchema={uiSchema} />
      </div>
    );
  }
}
