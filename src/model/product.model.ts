import { Version } from "./version.model";

export class Product{
    public Id: number; //arbitary id for sort order

    public Title : string;

    public Description: string;

    public Versions: Version[];

    public ImageUrl: string;

    public SourceUrl: string;
}