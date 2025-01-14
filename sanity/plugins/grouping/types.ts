import { ComponentType } from "react";
import { DocumentDefinition, FieldGroupDefinition, InputProps, ObjectDefinition, SchemaTypeDefinition, StringDefinition } from "sanity";

export type DocumentObjectDefinitionType = (SchemaTypeDefinition | DocumentDefinition | ObjectDefinition | StringDefinition) & {
    groups?: FieldGroupDefinition[];
    fields: Array<{group?: string | string[] | FieldGroupDefinition}>;
  };

  export type Group = FieldGroupDefinition & {
    selected: boolean;
    disabled: boolean;
  };

  export type InputPropsWithGroups = InputProps &  {groups?: Group[]};

  export type GroupingPluginConfig = {
    defaultGroupTitle?: string;
    defaultGroupIcon?: ComponentType;
    schemas?: SchemaTypeDefinition[];
    allFieldsShown?: boolean;
  } | void;