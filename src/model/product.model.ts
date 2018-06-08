import { Version } from "./version.model";
import { DocumentReference } from "angularfire2/firestore";

export class Product{
    public Id: number; //arbitary id for sort order

    public Title : string;

    public Description: string;

    public ImageUrl: string;

    public SourceUrl: string;

    public DocumentRef : DocumentReference;

    public DocumentId: string;

}