import { Version } from "./version.model";

export class Product{
    public Title : string;

    public Description: string;

    public Version: Version[];

    public ImageUrl: string;

    public SourceUrl: string;

    public Date: Date;
}