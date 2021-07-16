export enum BastardGen {
    V1,
    V2
}

export enum LicenseType {
    EXTERNAL_PROVIDER,
    ON_CHAIN_STRING
}

export interface StorageProvider {
    name: string;
    baseURI: string;
    hashLength: number;
}

export interface License {
    licenseType: LicenseType;
    content: string;
    provider: StorageProvider;
}


/*
const newLicense: License = {
    content: "",
    licenseType: LicenseType.EXTERNAL_PROVIDER,
    provider: {
        baseURI: "ipfs.io/ipfs/",
        hashLength: 46,
        name: "ipfs"
    }
}
*/