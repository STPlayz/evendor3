/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductCommentsCreateFormInputValues = {
    userID?: string;
    likes?: number;
    replies?: string;
    text?: string;
};
export declare type ProductCommentsCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    likes?: ValidationFunction<number>;
    replies?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCommentsCreateFormOverridesProps = {
    ProductCommentsCreateFormGrid?: FormProps<GridProps>;
    userID?: FormProps<TextFieldProps>;
    likes?: FormProps<TextFieldProps>;
    replies?: FormProps<TextAreaFieldProps>;
    text?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCommentsCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductCommentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductCommentsCreateFormInputValues) => ProductCommentsCreateFormInputValues;
    onSuccess?: (fields: ProductCommentsCreateFormInputValues) => void;
    onError?: (fields: ProductCommentsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductCommentsCreateFormInputValues) => ProductCommentsCreateFormInputValues;
    onValidate?: ProductCommentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCommentsCreateForm(props: ProductCommentsCreateFormProps): React.ReactElement;
