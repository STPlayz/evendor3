/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ProductComments } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductCommentsUpdateFormInputValues = {
    userID?: string;
    likes?: number;
    replies?: string;
    text?: string;
};
export declare type ProductCommentsUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    likes?: ValidationFunction<number>;
    replies?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCommentsUpdateFormOverridesProps = {
    ProductCommentsUpdateFormGrid?: FormProps<GridProps>;
    userID?: FormProps<TextFieldProps>;
    likes?: FormProps<TextFieldProps>;
    replies?: FormProps<TextAreaFieldProps>;
    text?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCommentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductCommentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    productComments?: ProductComments;
    onSubmit?: (fields: ProductCommentsUpdateFormInputValues) => ProductCommentsUpdateFormInputValues;
    onSuccess?: (fields: ProductCommentsUpdateFormInputValues) => void;
    onError?: (fields: ProductCommentsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductCommentsUpdateFormInputValues) => ProductCommentsUpdateFormInputValues;
    onValidate?: ProductCommentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCommentsUpdateForm(props: ProductCommentsUpdateFormProps): React.ReactElement;
