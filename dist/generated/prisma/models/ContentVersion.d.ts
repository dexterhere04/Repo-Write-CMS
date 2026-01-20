import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContentVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$ContentVersionPayload>;
export type AggregateContentVersion = {
    _count: ContentVersionCountAggregateOutputType | null;
    _avg: ContentVersionAvgAggregateOutputType | null;
    _sum: ContentVersionSumAggregateOutputType | null;
    _min: ContentVersionMinAggregateOutputType | null;
    _max: ContentVersionMaxAggregateOutputType | null;
};
export type ContentVersionAvgAggregateOutputType = {
    version: number | null;
};
export type ContentVersionSumAggregateOutputType = {
    version: number | null;
};
export type ContentVersionMinAggregateOutputType = {
    id: string | null;
    contentId: string | null;
    title: string | null;
    summary: string | null;
    body: string | null;
    version: number | null;
    createdAt: Date | null;
};
export type ContentVersionMaxAggregateOutputType = {
    id: string | null;
    contentId: string | null;
    title: string | null;
    summary: string | null;
    body: string | null;
    version: number | null;
    createdAt: Date | null;
};
export type ContentVersionCountAggregateOutputType = {
    id: number;
    contentId: number;
    title: number;
    summary: number;
    body: number;
    version: number;
    createdAt: number;
    _all: number;
};
export type ContentVersionAvgAggregateInputType = {
    version?: true;
};
export type ContentVersionSumAggregateInputType = {
    version?: true;
};
export type ContentVersionMinAggregateInputType = {
    id?: true;
    contentId?: true;
    title?: true;
    summary?: true;
    body?: true;
    version?: true;
    createdAt?: true;
};
export type ContentVersionMaxAggregateInputType = {
    id?: true;
    contentId?: true;
    title?: true;
    summary?: true;
    body?: true;
    version?: true;
    createdAt?: true;
};
export type ContentVersionCountAggregateInputType = {
    id?: true;
    contentId?: true;
    title?: true;
    summary?: true;
    body?: true;
    version?: true;
    createdAt?: true;
    _all?: true;
};
export type ContentVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentVersionWhereInput;
    orderBy?: Prisma.ContentVersionOrderByWithRelationInput | Prisma.ContentVersionOrderByWithRelationInput[];
    cursor?: Prisma.ContentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContentVersionCountAggregateInputType;
    _avg?: ContentVersionAvgAggregateInputType;
    _sum?: ContentVersionSumAggregateInputType;
    _min?: ContentVersionMinAggregateInputType;
    _max?: ContentVersionMaxAggregateInputType;
};
export type GetContentVersionAggregateType<T extends ContentVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateContentVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContentVersion[P]> : Prisma.GetScalarType<T[P], AggregateContentVersion[P]>;
};
export type ContentVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentVersionWhereInput;
    orderBy?: Prisma.ContentVersionOrderByWithAggregationInput | Prisma.ContentVersionOrderByWithAggregationInput[];
    by: Prisma.ContentVersionScalarFieldEnum[] | Prisma.ContentVersionScalarFieldEnum;
    having?: Prisma.ContentVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentVersionCountAggregateInputType | true;
    _avg?: ContentVersionAvgAggregateInputType;
    _sum?: ContentVersionSumAggregateInputType;
    _min?: ContentVersionMinAggregateInputType;
    _max?: ContentVersionMaxAggregateInputType;
};
export type ContentVersionGroupByOutputType = {
    id: string;
    contentId: string;
    title: string;
    summary: string | null;
    body: string;
    version: number;
    createdAt: Date;
    _count: ContentVersionCountAggregateOutputType | null;
    _avg: ContentVersionAvgAggregateOutputType | null;
    _sum: ContentVersionSumAggregateOutputType | null;
    _min: ContentVersionMinAggregateOutputType | null;
    _max: ContentVersionMaxAggregateOutputType | null;
};
type GetContentVersionGroupByPayload<T extends ContentVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContentVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContentVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContentVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContentVersionGroupByOutputType[P]>;
}>>;
export type ContentVersionWhereInput = {
    AND?: Prisma.ContentVersionWhereInput | Prisma.ContentVersionWhereInput[];
    OR?: Prisma.ContentVersionWhereInput[];
    NOT?: Prisma.ContentVersionWhereInput | Prisma.ContentVersionWhereInput[];
    id?: Prisma.StringFilter<"ContentVersion"> | string;
    contentId?: Prisma.StringFilter<"ContentVersion"> | string;
    title?: Prisma.StringFilter<"ContentVersion"> | string;
    summary?: Prisma.StringNullableFilter<"ContentVersion"> | string | null;
    body?: Prisma.StringFilter<"ContentVersion"> | string;
    version?: Prisma.IntFilter<"ContentVersion"> | number;
    createdAt?: Prisma.DateTimeFilter<"ContentVersion"> | Date | string;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
};
export type ContentVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    body?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    content?: Prisma.ContentOrderByWithRelationInput;
};
export type ContentVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    contentId_version?: Prisma.ContentVersionContentIdVersionCompoundUniqueInput;
    AND?: Prisma.ContentVersionWhereInput | Prisma.ContentVersionWhereInput[];
    OR?: Prisma.ContentVersionWhereInput[];
    NOT?: Prisma.ContentVersionWhereInput | Prisma.ContentVersionWhereInput[];
    contentId?: Prisma.StringFilter<"ContentVersion"> | string;
    title?: Prisma.StringFilter<"ContentVersion"> | string;
    summary?: Prisma.StringNullableFilter<"ContentVersion"> | string | null;
    body?: Prisma.StringFilter<"ContentVersion"> | string;
    version?: Prisma.IntFilter<"ContentVersion"> | number;
    createdAt?: Prisma.DateTimeFilter<"ContentVersion"> | Date | string;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
}, "id" | "contentId_version">;
export type ContentVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    body?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ContentVersionCountOrderByAggregateInput;
    _avg?: Prisma.ContentVersionAvgOrderByAggregateInput;
    _max?: Prisma.ContentVersionMaxOrderByAggregateInput;
    _min?: Prisma.ContentVersionMinOrderByAggregateInput;
    _sum?: Prisma.ContentVersionSumOrderByAggregateInput;
};
export type ContentVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContentVersionScalarWhereWithAggregatesInput | Prisma.ContentVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContentVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContentVersionScalarWhereWithAggregatesInput | Prisma.ContentVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ContentVersion"> | string;
    contentId?: Prisma.StringWithAggregatesFilter<"ContentVersion"> | string;
    title?: Prisma.StringWithAggregatesFilter<"ContentVersion"> | string;
    summary?: Prisma.StringNullableWithAggregatesFilter<"ContentVersion"> | string | null;
    body?: Prisma.StringWithAggregatesFilter<"ContentVersion"> | string;
    version?: Prisma.IntWithAggregatesFilter<"ContentVersion"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ContentVersion"> | Date | string;
};
export type ContentVersionCreateInput = {
    id?: string;
    title: string;
    summary?: string | null;
    body: string;
    version: number;
    createdAt?: Date | string;
    content: Prisma.ContentCreateNestedOneWithoutVersionsInput;
};
export type ContentVersionUncheckedCreateInput = {
    id?: string;
    contentId: string;
    title: string;
    summary?: string | null;
    body: string;
    version: number;
    createdAt?: Date | string;
};
export type ContentVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.ContentUpdateOneRequiredWithoutVersionsNestedInput;
};
export type ContentVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentVersionCreateManyInput = {
    id?: string;
    contentId: string;
    title: string;
    summary?: string | null;
    body: string;
    version: number;
    createdAt?: Date | string;
};
export type ContentVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentVersionListRelationFilter = {
    every?: Prisma.ContentVersionWhereInput;
    some?: Prisma.ContentVersionWhereInput;
    none?: Prisma.ContentVersionWhereInput;
};
export type ContentVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContentVersionContentIdVersionCompoundUniqueInput = {
    contentId: string;
    version: number;
};
export type ContentVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContentVersionAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type ContentVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContentVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContentVersionSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type ContentVersionCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ContentVersionCreateWithoutContentInput, Prisma.ContentVersionUncheckedCreateWithoutContentInput> | Prisma.ContentVersionCreateWithoutContentInput[] | Prisma.ContentVersionUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentVersionCreateOrConnectWithoutContentInput | Prisma.ContentVersionCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.ContentVersionCreateManyContentInputEnvelope;
    connect?: Prisma.ContentVersionWhereUniqueInput | Prisma.ContentVersionWhereUniqueInput[];
};
export type ContentVersionUncheckedCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ContentVersionCreateWithoutContentInput, Prisma.ContentVersionUncheckedCreateWithoutContentInput> | Prisma.ContentVersionCreateWithoutContentInput[] | Prisma.ContentVersionUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentVersionCreateOrConnectWithoutContentInput | Prisma.ContentVersionCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.ContentVersionCreateManyContentInputEnvelope;
    connect?: Prisma.ContentVersionWhereUniqueInput | Prisma.ContentVersionWhereUniqueInput[];
};
export type ContentVersionUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ContentVersionCreateWithoutContentInput, Prisma.ContentVersionUncheckedCreateWithoutContentInput> | Prisma.ContentVersionCreateWithoutContentInput[] | Prisma.ContentVersionUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentVersionCreateOrConnectWithoutContentInput | Prisma.ContentVersionCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.ContentVersionUpsertWithWhereUniqueWithoutContentInput | Prisma.ContentVersionUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.ContentVersionCreateManyContentInputEnvelope;
    set?: Prisma.ContentVersionWhereUniqueInput | Prisma.ContentVersionWhereUniqueInput[];
    disconnect?: Prisma.ContentVersionWhereUniqueInput | Prisma.ContentVersionWhereUniqueInput[];
    delete?: Prisma.ContentVersionWhereUniqueInput | Prisma.ContentVersionWhereUniqueInput[];
    connect?: Prisma.ContentVersionWhereUniqueInput | Prisma.ContentVersionWhereUniqueInput[];
    update?: Prisma.ContentVersionUpdateWithWhereUniqueWithoutContentInput | Prisma.ContentVersionUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.ContentVersionUpdateManyWithWhereWithoutContentInput | Prisma.ContentVersionUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.ContentVersionScalarWhereInput | Prisma.ContentVersionScalarWhereInput[];
};
export type ContentVersionUncheckedUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ContentVersionCreateWithoutContentInput, Prisma.ContentVersionUncheckedCreateWithoutContentInput> | Prisma.ContentVersionCreateWithoutContentInput[] | Prisma.ContentVersionUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentVersionCreateOrConnectWithoutContentInput | Prisma.ContentVersionCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.ContentVersionUpsertWithWhereUniqueWithoutContentInput | Prisma.ContentVersionUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.ContentVersionCreateManyContentInputEnvelope;
    set?: Prisma.ContentVersionWhereUniqueInput | Prisma.ContentVersionWhereUniqueInput[];
    disconnect?: Prisma.ContentVersionWhereUniqueInput | Prisma.ContentVersionWhereUniqueInput[];
    delete?: Prisma.ContentVersionWhereUniqueInput | Prisma.ContentVersionWhereUniqueInput[];
    connect?: Prisma.ContentVersionWhereUniqueInput | Prisma.ContentVersionWhereUniqueInput[];
    update?: Prisma.ContentVersionUpdateWithWhereUniqueWithoutContentInput | Prisma.ContentVersionUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.ContentVersionUpdateManyWithWhereWithoutContentInput | Prisma.ContentVersionUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.ContentVersionScalarWhereInput | Prisma.ContentVersionScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ContentVersionCreateWithoutContentInput = {
    id?: string;
    title: string;
    summary?: string | null;
    body: string;
    version: number;
    createdAt?: Date | string;
};
export type ContentVersionUncheckedCreateWithoutContentInput = {
    id?: string;
    title: string;
    summary?: string | null;
    body: string;
    version: number;
    createdAt?: Date | string;
};
export type ContentVersionCreateOrConnectWithoutContentInput = {
    where: Prisma.ContentVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentVersionCreateWithoutContentInput, Prisma.ContentVersionUncheckedCreateWithoutContentInput>;
};
export type ContentVersionCreateManyContentInputEnvelope = {
    data: Prisma.ContentVersionCreateManyContentInput | Prisma.ContentVersionCreateManyContentInput[];
    skipDuplicates?: boolean;
};
export type ContentVersionUpsertWithWhereUniqueWithoutContentInput = {
    where: Prisma.ContentVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContentVersionUpdateWithoutContentInput, Prisma.ContentVersionUncheckedUpdateWithoutContentInput>;
    create: Prisma.XOR<Prisma.ContentVersionCreateWithoutContentInput, Prisma.ContentVersionUncheckedCreateWithoutContentInput>;
};
export type ContentVersionUpdateWithWhereUniqueWithoutContentInput = {
    where: Prisma.ContentVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContentVersionUpdateWithoutContentInput, Prisma.ContentVersionUncheckedUpdateWithoutContentInput>;
};
export type ContentVersionUpdateManyWithWhereWithoutContentInput = {
    where: Prisma.ContentVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.ContentVersionUpdateManyMutationInput, Prisma.ContentVersionUncheckedUpdateManyWithoutContentInput>;
};
export type ContentVersionScalarWhereInput = {
    AND?: Prisma.ContentVersionScalarWhereInput | Prisma.ContentVersionScalarWhereInput[];
    OR?: Prisma.ContentVersionScalarWhereInput[];
    NOT?: Prisma.ContentVersionScalarWhereInput | Prisma.ContentVersionScalarWhereInput[];
    id?: Prisma.StringFilter<"ContentVersion"> | string;
    contentId?: Prisma.StringFilter<"ContentVersion"> | string;
    title?: Prisma.StringFilter<"ContentVersion"> | string;
    summary?: Prisma.StringNullableFilter<"ContentVersion"> | string | null;
    body?: Prisma.StringFilter<"ContentVersion"> | string;
    version?: Prisma.IntFilter<"ContentVersion"> | number;
    createdAt?: Prisma.DateTimeFilter<"ContentVersion"> | Date | string;
};
export type ContentVersionCreateManyContentInput = {
    id?: string;
    title: string;
    summary?: string | null;
    body: string;
    version: number;
    createdAt?: Date | string;
};
export type ContentVersionUpdateWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentVersionUncheckedUpdateWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentVersionUncheckedUpdateManyWithoutContentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContentVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    title?: boolean;
    summary?: boolean;
    body?: boolean;
    version?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentVersion"]>;
export type ContentVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    title?: boolean;
    summary?: boolean;
    body?: boolean;
    version?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentVersion"]>;
export type ContentVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contentId?: boolean;
    title?: boolean;
    summary?: boolean;
    body?: boolean;
    version?: boolean;
    createdAt?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentVersion"]>;
export type ContentVersionSelectScalar = {
    id?: boolean;
    contentId?: boolean;
    title?: boolean;
    summary?: boolean;
    body?: boolean;
    version?: boolean;
    createdAt?: boolean;
};
export type ContentVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contentId" | "title" | "summary" | "body" | "version" | "createdAt", ExtArgs["result"]["contentVersion"]>;
export type ContentVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type ContentVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type ContentVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type $ContentVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContentVersion";
    objects: {
        content: Prisma.$ContentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contentId: string;
        title: string;
        summary: string | null;
        body: string;
        version: number;
        createdAt: Date;
    }, ExtArgs["result"]["contentVersion"]>;
    composites: {};
};
export type ContentVersionGetPayload<S extends boolean | null | undefined | ContentVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload, S>;
export type ContentVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContentVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContentVersionCountAggregateInputType | true;
};
export interface ContentVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContentVersion'];
        meta: {
            name: 'ContentVersion';
        };
    };
    findUnique<T extends ContentVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, ContentVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContentVersionClient<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContentVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContentVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentVersionClient<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContentVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, ContentVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContentVersionClient<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContentVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContentVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentVersionClient<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContentVersionFindManyArgs>(args?: Prisma.SelectSubset<T, ContentVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContentVersionCreateArgs>(args: Prisma.SelectSubset<T, ContentVersionCreateArgs<ExtArgs>>): Prisma.Prisma__ContentVersionClient<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContentVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, ContentVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContentVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContentVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContentVersionDeleteArgs>(args: Prisma.SelectSubset<T, ContentVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__ContentVersionClient<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContentVersionUpdateArgs>(args: Prisma.SelectSubset<T, ContentVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__ContentVersionClient<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContentVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContentVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContentVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, ContentVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContentVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContentVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContentVersionUpsertArgs>(args: Prisma.SelectSubset<T, ContentVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__ContentVersionClient<runtime.Types.Result.GetResult<Prisma.$ContentVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContentVersionCountArgs>(args?: Prisma.Subset<T, ContentVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContentVersionCountAggregateOutputType> : number>;
    aggregate<T extends ContentVersionAggregateArgs>(args: Prisma.Subset<T, ContentVersionAggregateArgs>): Prisma.PrismaPromise<GetContentVersionAggregateType<T>>;
    groupBy<T extends ContentVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContentVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: ContentVersionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContentVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContentVersionFieldRefs;
}
export interface Prisma__ContentVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    content<T extends Prisma.ContentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContentDefaultArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContentVersionFieldRefs {
    readonly id: Prisma.FieldRef<"ContentVersion", 'String'>;
    readonly contentId: Prisma.FieldRef<"ContentVersion", 'String'>;
    readonly title: Prisma.FieldRef<"ContentVersion", 'String'>;
    readonly summary: Prisma.FieldRef<"ContentVersion", 'String'>;
    readonly body: Prisma.FieldRef<"ContentVersion", 'String'>;
    readonly version: Prisma.FieldRef<"ContentVersion", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ContentVersion", 'DateTime'>;
}
export type ContentVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
    where: Prisma.ContentVersionWhereUniqueInput;
};
export type ContentVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
    where: Prisma.ContentVersionWhereUniqueInput;
};
export type ContentVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
    where?: Prisma.ContentVersionWhereInput;
    orderBy?: Prisma.ContentVersionOrderByWithRelationInput | Prisma.ContentVersionOrderByWithRelationInput[];
    cursor?: Prisma.ContentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentVersionScalarFieldEnum | Prisma.ContentVersionScalarFieldEnum[];
};
export type ContentVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
    where?: Prisma.ContentVersionWhereInput;
    orderBy?: Prisma.ContentVersionOrderByWithRelationInput | Prisma.ContentVersionOrderByWithRelationInput[];
    cursor?: Prisma.ContentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentVersionScalarFieldEnum | Prisma.ContentVersionScalarFieldEnum[];
};
export type ContentVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
    where?: Prisma.ContentVersionWhereInput;
    orderBy?: Prisma.ContentVersionOrderByWithRelationInput | Prisma.ContentVersionOrderByWithRelationInput[];
    cursor?: Prisma.ContentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentVersionScalarFieldEnum | Prisma.ContentVersionScalarFieldEnum[];
};
export type ContentVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentVersionCreateInput, Prisma.ContentVersionUncheckedCreateInput>;
};
export type ContentVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContentVersionCreateManyInput | Prisma.ContentVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContentVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    data: Prisma.ContentVersionCreateManyInput | Prisma.ContentVersionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContentVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContentVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentVersionUpdateInput, Prisma.ContentVersionUncheckedUpdateInput>;
    where: Prisma.ContentVersionWhereUniqueInput;
};
export type ContentVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContentVersionUpdateManyMutationInput, Prisma.ContentVersionUncheckedUpdateManyInput>;
    where?: Prisma.ContentVersionWhereInput;
    limit?: number;
};
export type ContentVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentVersionUpdateManyMutationInput, Prisma.ContentVersionUncheckedUpdateManyInput>;
    where?: Prisma.ContentVersionWhereInput;
    limit?: number;
    include?: Prisma.ContentVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContentVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
    where: Prisma.ContentVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentVersionCreateInput, Prisma.ContentVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContentVersionUpdateInput, Prisma.ContentVersionUncheckedUpdateInput>;
};
export type ContentVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
    where: Prisma.ContentVersionWhereUniqueInput;
};
export type ContentVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentVersionWhereInput;
    limit?: number;
};
export type ContentVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ContentVersionOmit<ExtArgs> | null;
    include?: Prisma.ContentVersionInclude<ExtArgs> | null;
};
export {};
