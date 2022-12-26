/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductsCreateFormInputValues = {
    images?: string;
    title?: string;
    bidding_price_min?: number;
    bidding_price_current?: number;
    buy_now_price?: number;
    description?: string;
    condition?: string;
};
export declare type ProductsCreateFormValidationValues = {
    images?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    bidding_price_min?: ValidationFunction<number>;
    bidding_price_current?: ValidationFunction<number>;
    buy_now_price?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    condition?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductsCreateFormOverridesProps = {
    ProductsCreateFormGrid?: FormProps<GridProps>;
    images?: FormProps<TextAreaFieldProps>;
    title?: FormProps<TextFieldProps>;
    bidding_price_min?: FormProps<TextFieldProps>;
    bidding_price_current?: FormProps<TextFieldProps>;
    buy_now_price?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    condition?: FormProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ProductsCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductsCreateFormInputValues) => ProductsCreateFormInputValues;
    onSuccess?: (fields: ProductsCreateFormInputValues) => void;
    onError?: (fields: ProductsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductsCreateFormInputValues) => ProductsCreateFormInputValues;
    onValidate?: ProductsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductsCreateForm(props: ProductsCreateFormProps): React.ReactElement;
