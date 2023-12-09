"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement, FormElementInstance, SubmitFunction } from "../FormElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import useDesigner from "../hooks/useDesigner";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Switch } from "../ui/switch";
import { cn } from "@/lib/utils";
import { LuHeading1 } from "react-icons/lu";
import { RiSeparator } from "react-icons/ri";
import { Separator } from "../ui/separator";


const type: ElementsType = "SeperatorField";


export const SeparatorFieldFormElement: FormElement = {
    type, 
    construct: (id: string) => ({
        id,
        type, 
    }),
    designerBtnElement: {
        icon: RiSeparator,
        label: "Separator field",
    },
    designerComponent: DesignerComponent,
    formComponent:  FormComponent,
    propertiesComponent: PropertiesComponent,

    validate: () => true,
};



  function DesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label className=" text-muted-foreground">
        Separator field
        </label>
        <Separator />
      </div>
    );
  }


  function FormComponent({
     elementInstance, 
    }:
    { 
    elementInstance: FormElementInstance ;
    }) {
    return (
      <Separator />
    );
  }

  function PropertiesComponent({
    elementInstance,
  }: {
    elementInstance: FormElementInstance;
  } ){

    return <p>No properties for this element</p>
}



