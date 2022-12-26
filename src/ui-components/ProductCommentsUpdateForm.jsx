/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { ProductComments } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ProductCommentsUpdateForm(props) {
  const {
    id,
    productComments,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: undefined,
    likes: undefined,
    replies: undefined,
    text: undefined,
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [likes, setLikes] = React.useState(initialValues.likes);
  const [replies, setReplies] = React.useState(
    initialValues.replies ? JSON.stringify(initialValues.replies) : undefined
  );
  const [text, setText] = React.useState(initialValues.text);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...productCommentsRecord };
    setUserID(cleanValues.userID);
    setLikes(cleanValues.likes);
    setReplies(
      typeof cleanValues.replies === "string"
        ? cleanValues.replies
        : JSON.stringify(cleanValues.replies)
    );
    setText(cleanValues.text);
    setErrors({});
  };
  const [productCommentsRecord, setProductCommentsRecord] =
    React.useState(productComments);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(ProductComments, id)
        : productComments;
      setProductCommentsRecord(record);
    };
    queryData();
  }, [id, productComments]);
  React.useEffect(resetStateValues, [productCommentsRecord]);
  const validations = {
    userID: [],
    likes: [],
    replies: [{ type: "JSON" }],
    text: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userID,
          likes,
          replies,
          text,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            ProductComments.copyOf(productCommentsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ProductCommentsUpdateForm")}
    >
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              likes,
              replies,
              text,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="Likes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={likes}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              likes: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              userID,
              likes: value,
              replies,
              text,
            };
            const result = onChange(modelFields);
            value = result?.likes ?? value;
          }
          if (errors.likes?.hasError) {
            runValidationTasks("likes", value);
          }
          setLikes(value);
        }}
        onBlur={() => runValidationTasks("likes", likes)}
        errorMessage={errors.likes?.errorMessage}
        hasError={errors.likes?.hasError}
        {...getOverrideProps(overrides, "likes")}
      ></TextField>
      <TextAreaField
        label="Replies"
        isRequired={false}
        isReadOnly={false}
        defaultValue={replies}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              likes,
              replies: value,
              text,
            };
            const result = onChange(modelFields);
            value = result?.replies ?? value;
          }
          if (errors.replies?.hasError) {
            runValidationTasks("replies", value);
          }
          setReplies(value);
        }}
        onBlur={() => runValidationTasks("replies", replies)}
        errorMessage={errors.replies?.errorMessage}
        hasError={errors.replies?.hasError}
        {...getOverrideProps(overrides, "replies")}
      ></TextAreaField>
      <TextField
        label="Text"
        isRequired={false}
        isReadOnly={false}
        defaultValue={text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              likes,
              replies,
              text: value,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
