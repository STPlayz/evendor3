/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Products } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ProductsCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    images: undefined,
    title: undefined,
    bidding_price_min: undefined,
    bidding_price_current: undefined,
    buy_now_price: undefined,
    description: undefined,
    condition: undefined,
  };
  const [images, setImages] = React.useState(
    initialValues.images ? JSON.stringify(initialValues.images) : undefined
  );
  const [title, setTitle] = React.useState(initialValues.title);
  const [bidding_price_min, setBidding_price_min] = React.useState(
    initialValues.bidding_price_min
  );
  const [bidding_price_current, setBidding_price_current] = React.useState(
    initialValues.bidding_price_current
  );
  const [buy_now_price, setBuy_now_price] = React.useState(
    initialValues.buy_now_price
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [condition, setCondition] = React.useState(initialValues.condition);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setImages(initialValues.images);
    setTitle(initialValues.title);
    setBidding_price_min(initialValues.bidding_price_min);
    setBidding_price_current(initialValues.bidding_price_current);
    setBuy_now_price(initialValues.buy_now_price);
    setDescription(initialValues.description);
    setCondition(initialValues.condition);
    setErrors({});
  };
  const validations = {
    images: [{ type: "JSON" }],
    title: [],
    bidding_price_min: [],
    bidding_price_current: [],
    buy_now_price: [],
    description: [],
    condition: [],
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
          images,
          title,
          bidding_price_min,
          bidding_price_current,
          buy_now_price,
          description,
          condition,
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
          await DataStore.save(new Products(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ProductsCreateForm")}
    >
      <TextAreaField
        label="Images"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              images: value,
              title,
              bidding_price_min,
              bidding_price_current,
              buy_now_price,
              description,
              condition,
            };
            const result = onChange(modelFields);
            value = result?.images ?? value;
          }
          if (errors.images?.hasError) {
            runValidationTasks("images", value);
          }
          setImages(value);
        }}
        onBlur={() => runValidationTasks("images", images)}
        errorMessage={errors.images?.errorMessage}
        hasError={errors.images?.hasError}
        {...getOverrideProps(overrides, "images")}
      ></TextAreaField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              images,
              title: value,
              bidding_price_min,
              bidding_price_current,
              buy_now_price,
              description,
              condition,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Bidding price min"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              bidding_price_min: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              images,
              title,
              bidding_price_min: value,
              bidding_price_current,
              buy_now_price,
              description,
              condition,
            };
            const result = onChange(modelFields);
            value = result?.bidding_price_min ?? value;
          }
          if (errors.bidding_price_min?.hasError) {
            runValidationTasks("bidding_price_min", value);
          }
          setBidding_price_min(value);
        }}
        onBlur={() =>
          runValidationTasks("bidding_price_min", bidding_price_min)
        }
        errorMessage={errors.bidding_price_min?.errorMessage}
        hasError={errors.bidding_price_min?.hasError}
        {...getOverrideProps(overrides, "bidding_price_min")}
      ></TextField>
      <TextField
        label="Bidding price current"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              bidding_price_current: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              images,
              title,
              bidding_price_min,
              bidding_price_current: value,
              buy_now_price,
              description,
              condition,
            };
            const result = onChange(modelFields);
            value = result?.bidding_price_current ?? value;
          }
          if (errors.bidding_price_current?.hasError) {
            runValidationTasks("bidding_price_current", value);
          }
          setBidding_price_current(value);
        }}
        onBlur={() =>
          runValidationTasks("bidding_price_current", bidding_price_current)
        }
        errorMessage={errors.bidding_price_current?.errorMessage}
        hasError={errors.bidding_price_current?.hasError}
        {...getOverrideProps(overrides, "bidding_price_current")}
      ></TextField>
      <TextField
        label="Buy now price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              buy_now_price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              images,
              title,
              bidding_price_min,
              bidding_price_current,
              buy_now_price: value,
              description,
              condition,
            };
            const result = onChange(modelFields);
            value = result?.buy_now_price ?? value;
          }
          if (errors.buy_now_price?.hasError) {
            runValidationTasks("buy_now_price", value);
          }
          setBuy_now_price(value);
        }}
        onBlur={() => runValidationTasks("buy_now_price", buy_now_price)}
        errorMessage={errors.buy_now_price?.errorMessage}
        hasError={errors.buy_now_price?.hasError}
        {...getOverrideProps(overrides, "buy_now_price")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              images,
              title,
              bidding_price_min,
              bidding_price_current,
              buy_now_price,
              description: value,
              condition,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SelectField
        label="Condition"
        placeholder="Please select an option"
        isDisabled={false}
        value={condition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              images,
              title,
              bidding_price_min,
              bidding_price_current,
              buy_now_price,
              description,
              condition: value,
            };
            const result = onChange(modelFields);
            value = result?.condition ?? value;
          }
          if (errors.condition?.hasError) {
            runValidationTasks("condition", value);
          }
          setCondition(value);
        }}
        onBlur={() => runValidationTasks("condition", condition)}
        errorMessage={errors.condition?.errorMessage}
        hasError={errors.condition?.hasError}
        {...getOverrideProps(overrides, "condition")}
      >
        <option
          children="Used"
          value="USED"
          {...getOverrideProps(overrides, "conditionoption0")}
        ></option>
        <option
          children="Likenew"
          value="LIKENEW"
          {...getOverrideProps(overrides, "conditionoption1")}
        ></option>
        <option
          children="New"
          value="NEW"
          {...getOverrideProps(overrides, "conditionoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
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
