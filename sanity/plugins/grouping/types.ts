import { ComponentType } from "react";
import { DocumentDefinition, FieldGroupDefinition, InputProps, ObjectDefinition } from "sanity";

export type DocumentObjectDefinitionType = (DocumentDefinition | ObjectDefinition) & {
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
  } | void;