import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContentTagModel = runtime.Types.Result.DefaultSelection<Prisma.$ContentTagPayload>;
export type AggregateContentTag = {
    _count: ContentTagCountAggregateOutputType | null;
    _min: ContentTagMinAggregateOutputType | null;
    _max: ContentTagMaxAggregateOutputType | null;
};
export type ContentTagMinAggregateOutputType = {
    contentId: string | null;
    tagId: string | null;
};
export type ContentTagMaxAggregateOutputType = {
    contentId: string | null;
    tagId: string | null;
};
export type ContentTagCountAggregateOutputType = {
    contentId: number;
    tagId: number;
    _all: number;
};
export type ContentTagMinAggregateInputType = {
    contentId?: true;
    tagId?: true;
};
export type ContentTagMaxAggregateInputType = {
    contentId?: true;
    tagId?: true;
};
export type ContentTagCountAggregateInputType = {
    contentId?: true;
    tagId?: true;
    _all?: true;
};
export type ContentTagAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentTagWhereInput;
    orderBy?: Prisma.ContentTagOrderByWithRelationInput | Prisma.ContentTagOrderByWithRelationInput[];
    cursor?: Prisma.ContentTagWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContentTagCountAggregateInputType;
    _min?: ContentTagMinAggregateInputType;
    _max?: ContentTagMaxAggregateInputType;
};
export type GetContentTagAggregateType<T extends ContentTagAggregateArgs> = {
    [P in keyof T & keyof AggregateContentTag]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContentTag[P]> : Prisma.GetScalarType<T[P], AggregateContentTag[P]>;
};
export type ContentTagGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentTagWhereInput;
    orderBy?: Prisma.ContentTagOrderByWithAggregationInput | Prisma.ContentTagOrderByWithAggregationInput[];
    by: Prisma.ContentTagScalarFieldEnum[] | Prisma.ContentTagScalarFieldEnum;
    having?: Prisma.ContentTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContentTagCountAggregateInputType | true;
    _min?: ContentTagMinAggregateInputType;
    _max?: ContentTagMaxAggregateInputType;
};
export type ContentTagGroupByOutputType = {
    contentId: string;
    tagId: string;
    _count: ContentTagCountAggregateOutputType | null;
    _min: ContentTagMinAggregateOutputType | null;
    _max: ContentTagMaxAggregateOutputType | null;
};
type GetContentTagGroupByPayload<T extends ContentTagGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContentTagGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContentTagGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContentTagGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContentTagGroupByOutputType[P]>;
}>>;
export type ContentTagWhereInput = {
    AND?: Prisma.ContentTagWhereInput | Prisma.ContentTagWhereInput[];
    OR?: Prisma.ContentTagWhereInput[];
    NOT?: Prisma.ContentTagWhereInput | Prisma.ContentTagWhereInput[];
    contentId?: Prisma.StringFilter<"ContentTag"> | string;
    tagId?: Prisma.StringFilter<"ContentTag"> | string;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
    tag?: Prisma.XOR<Prisma.TagScalarRelationFilter, Prisma.TagWhereInput>;
};
export type ContentTagOrderByWithRelationInput = {
    contentId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
    content?: Prisma.ContentOrderByWithRelationInput;
    tag?: Prisma.TagOrderByWithRelationInput;
};
export type ContentTagWhereUniqueInput = Prisma.AtLeast<{
    contentId_tagId?: Prisma.ContentTagContentIdTagIdCompoundUniqueInput;
    AND?: Prisma.ContentTagWhereInput | Prisma.ContentTagWhereInput[];
    OR?: Prisma.ContentTagWhereInput[];
    NOT?: Prisma.ContentTagWhereInput | Prisma.ContentTagWhereInput[];
    contentId?: Prisma.StringFilter<"ContentTag"> | string;
    tagId?: Prisma.StringFilter<"ContentTag"> | string;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
    tag?: Prisma.XOR<Prisma.TagScalarRelationFilter, Prisma.TagWhereInput>;
}, "contentId_tagId">;
export type ContentTagOrderByWithAggregationInput = {
    contentId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
    _count?: Prisma.ContentTagCountOrderByAggregateInput;
    _max?: Prisma.ContentTagMaxOrderByAggregateInput;
    _min?: Prisma.ContentTagMinOrderByAggregateInput;
};
export type ContentTagScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContentTagScalarWhereWithAggregatesInput | Prisma.ContentTagScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContentTagScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContentTagScalarWhereWithAggregatesInput | Prisma.ContentTagScalarWhereWithAggregatesInput[];
    contentId?: Prisma.StringWithAggregatesFilter<"ContentTag"> | string;
    tagId?: Prisma.StringWithAggregatesFilter<"ContentTag"> | string;
};
export type ContentTagCreateInput = {
    content: Prisma.ContentCreateNestedOneWithoutTagsInput;
    tag: Prisma.TagCreateNestedOneWithoutItemsInput;
};
export type ContentTagUncheckedCreateInput = {
    contentId: string;
    tagId: string;
};
export type ContentTagUpdateInput = {
    content?: Prisma.ContentUpdateOneRequiredWithoutTagsNestedInput;
    tag?: Prisma.TagUpdateOneRequiredWithoutItemsNestedInput;
};
export type ContentTagUncheckedUpdateInput = {
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTagCreateManyInput = {
    contentId: string;
    tagId: string;
};
export type ContentTagUpdateManyMutationInput = {};
export type ContentTagUncheckedUpdateManyInput = {
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTagListRelationFilter = {
    every?: Prisma.ContentTagWhereInput;
    some?: Prisma.ContentTagWhereInput;
    none?: Prisma.ContentTagWhereInput;
};
export type ContentTagOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContentTagContentIdTagIdCompoundUniqueInput = {
    contentId: string;
    tagId: string;
};
export type ContentTagCountOrderByAggregateInput = {
    contentId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type ContentTagMaxOrderByAggregateInput = {
    contentId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type ContentTagMinOrderByAggregateInput = {
    contentId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type ContentTagCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ContentTagCreateWithoutContentInput, Prisma.ContentTagUncheckedCreateWithoutContentInput> | Prisma.ContentTagCreateWithoutContentInput[] | Prisma.ContentTagUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentTagCreateOrConnectWithoutContentInput | Prisma.ContentTagCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.ContentTagCreateManyContentInputEnvelope;
    connect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
};
export type ContentTagUncheckedCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.ContentTagCreateWithoutContentInput, Prisma.ContentTagUncheckedCreateWithoutContentInput> | Prisma.ContentTagCreateWithoutContentInput[] | Prisma.ContentTagUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentTagCreateOrConnectWithoutContentInput | Prisma.ContentTagCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.ContentTagCreateManyContentInputEnvelope;
    connect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
};
export type ContentTagUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ContentTagCreateWithoutContentInput, Prisma.ContentTagUncheckedCreateWithoutContentInput> | Prisma.ContentTagCreateWithoutContentInput[] | Prisma.ContentTagUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentTagCreateOrConnectWithoutContentInput | Prisma.ContentTagCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.ContentTagUpsertWithWhereUniqueWithoutContentInput | Prisma.ContentTagUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.ContentTagCreateManyContentInputEnvelope;
    set?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    disconnect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    delete?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    connect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    update?: Prisma.ContentTagUpdateWithWhereUniqueWithoutContentInput | Prisma.ContentTagUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.ContentTagUpdateManyWithWhereWithoutContentInput | Prisma.ContentTagUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.ContentTagScalarWhereInput | Prisma.ContentTagScalarWhereInput[];
};
export type ContentTagUncheckedUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.ContentTagCreateWithoutContentInput, Prisma.ContentTagUncheckedCreateWithoutContentInput> | Prisma.ContentTagCreateWithoutContentInput[] | Prisma.ContentTagUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.ContentTagCreateOrConnectWithoutContentInput | Prisma.ContentTagCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.ContentTagUpsertWithWhereUniqueWithoutContentInput | Prisma.ContentTagUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.ContentTagCreateManyContentInputEnvelope;
    set?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    disconnect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    delete?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    connect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    update?: Prisma.ContentTagUpdateWithWhereUniqueWithoutContentInput | Prisma.ContentTagUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.ContentTagUpdateManyWithWhereWithoutContentInput | Prisma.ContentTagUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.ContentTagScalarWhereInput | Prisma.ContentTagScalarWhereInput[];
};
export type ContentTagCreateNestedManyWithoutTagInput = {
    create?: Prisma.XOR<Prisma.ContentTagCreateWithoutTagInput, Prisma.ContentTagUncheckedCreateWithoutTagInput> | Prisma.ContentTagCreateWithoutTagInput[] | Prisma.ContentTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.ContentTagCreateOrConnectWithoutTagInput | Prisma.ContentTagCreateOrConnectWithoutTagInput[];
    createMany?: Prisma.ContentTagCreateManyTagInputEnvelope;
    connect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
};
export type ContentTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: Prisma.XOR<Prisma.ContentTagCreateWithoutTagInput, Prisma.ContentTagUncheckedCreateWithoutTagInput> | Prisma.ContentTagCreateWithoutTagInput[] | Prisma.ContentTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.ContentTagCreateOrConnectWithoutTagInput | Prisma.ContentTagCreateOrConnectWithoutTagInput[];
    createMany?: Prisma.ContentTagCreateManyTagInputEnvelope;
    connect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
};
export type ContentTagUpdateManyWithoutTagNestedInput = {
    create?: Prisma.XOR<Prisma.ContentTagCreateWithoutTagInput, Prisma.ContentTagUncheckedCreateWithoutTagInput> | Prisma.ContentTagCreateWithoutTagInput[] | Prisma.ContentTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.ContentTagCreateOrConnectWithoutTagInput | Prisma.ContentTagCreateOrConnectWithoutTagInput[];
    upsert?: Prisma.ContentTagUpsertWithWhereUniqueWithoutTagInput | Prisma.ContentTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: Prisma.ContentTagCreateManyTagInputEnvelope;
    set?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    disconnect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    delete?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    connect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    update?: Prisma.ContentTagUpdateWithWhereUniqueWithoutTagInput | Prisma.ContentTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?: Prisma.ContentTagUpdateManyWithWhereWithoutTagInput | Prisma.ContentTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: Prisma.ContentTagScalarWhereInput | Prisma.ContentTagScalarWhereInput[];
};
export type ContentTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: Prisma.XOR<Prisma.ContentTagCreateWithoutTagInput, Prisma.ContentTagUncheckedCreateWithoutTagInput> | Prisma.ContentTagCreateWithoutTagInput[] | Prisma.ContentTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.ContentTagCreateOrConnectWithoutTagInput | Prisma.ContentTagCreateOrConnectWithoutTagInput[];
    upsert?: Prisma.ContentTagUpsertWithWhereUniqueWithoutTagInput | Prisma.ContentTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: Prisma.ContentTagCreateManyTagInputEnvelope;
    set?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    disconnect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    delete?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    connect?: Prisma.ContentTagWhereUniqueInput | Prisma.ContentTagWhereUniqueInput[];
    update?: Prisma.ContentTagUpdateWithWhereUniqueWithoutTagInput | Prisma.ContentTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?: Prisma.ContentTagUpdateManyWithWhereWithoutTagInput | Prisma.ContentTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: Prisma.ContentTagScalarWhereInput | Prisma.ContentTagScalarWhereInput[];
};
export type ContentTagCreateWithoutContentInput = {
    tag: Prisma.TagCreateNestedOneWithoutItemsInput;
};
export type ContentTagUncheckedCreateWithoutContentInput = {
    tagId: string;
};
export type ContentTagCreateOrConnectWithoutContentInput = {
    where: Prisma.ContentTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentTagCreateWithoutContentInput, Prisma.ContentTagUncheckedCreateWithoutContentInput>;
};
export type ContentTagCreateManyContentInputEnvelope = {
    data: Prisma.ContentTagCreateManyContentInput | Prisma.ContentTagCreateManyContentInput[];
    skipDuplicates?: boolean;
};
export type ContentTagUpsertWithWhereUniqueWithoutContentInput = {
    where: Prisma.ContentTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContentTagUpdateWithoutContentInput, Prisma.ContentTagUncheckedUpdateWithoutContentInput>;
    create: Prisma.XOR<Prisma.ContentTagCreateWithoutContentInput, Prisma.ContentTagUncheckedCreateWithoutContentInput>;
};
export type ContentTagUpdateWithWhereUniqueWithoutContentInput = {
    where: Prisma.ContentTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContentTagUpdateWithoutContentInput, Prisma.ContentTagUncheckedUpdateWithoutContentInput>;
};
export type ContentTagUpdateManyWithWhereWithoutContentInput = {
    where: Prisma.ContentTagScalarWhereInput;
    data: Prisma.XOR<Prisma.ContentTagUpdateManyMutationInput, Prisma.ContentTagUncheckedUpdateManyWithoutContentInput>;
};
export type ContentTagScalarWhereInput = {
    AND?: Prisma.ContentTagScalarWhereInput | Prisma.ContentTagScalarWhereInput[];
    OR?: Prisma.ContentTagScalarWhereInput[];
    NOT?: Prisma.ContentTagScalarWhereInput | Prisma.ContentTagScalarWhereInput[];
    contentId?: Prisma.StringFilter<"ContentTag"> | string;
    tagId?: Prisma.StringFilter<"ContentTag"> | string;
};
export type ContentTagCreateWithoutTagInput = {
    content: Prisma.ContentCreateNestedOneWithoutTagsInput;
};
export type ContentTagUncheckedCreateWithoutTagInput = {
    contentId: string;
};
export type ContentTagCreateOrConnectWithoutTagInput = {
    where: Prisma.ContentTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentTagCreateWithoutTagInput, Prisma.ContentTagUncheckedCreateWithoutTagInput>;
};
export type ContentTagCreateManyTagInputEnvelope = {
    data: Prisma.ContentTagCreateManyTagInput | Prisma.ContentTagCreateManyTagInput[];
    skipDuplicates?: boolean;
};
export type ContentTagUpsertWithWhereUniqueWithoutTagInput = {
    where: Prisma.ContentTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContentTagUpdateWithoutTagInput, Prisma.ContentTagUncheckedUpdateWithoutTagInput>;
    create: Prisma.XOR<Prisma.ContentTagCreateWithoutTagInput, Prisma.ContentTagUncheckedCreateWithoutTagInput>;
};
export type ContentTagUpdateWithWhereUniqueWithoutTagInput = {
    where: Prisma.ContentTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContentTagUpdateWithoutTagInput, Prisma.ContentTagUncheckedUpdateWithoutTagInput>;
};
export type ContentTagUpdateManyWithWhereWithoutTagInput = {
    where: Prisma.ContentTagScalarWhereInput;
    data: Prisma.XOR<Prisma.ContentTagUpdateManyMutationInput, Prisma.ContentTagUncheckedUpdateManyWithoutTagInput>;
};
export type ContentTagCreateManyContentInput = {
    tagId: string;
};
export type ContentTagUpdateWithoutContentInput = {
    tag?: Prisma.TagUpdateOneRequiredWithoutItemsNestedInput;
};
export type ContentTagUncheckedUpdateWithoutContentInput = {
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTagUncheckedUpdateManyWithoutContentInput = {
    tagId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTagCreateManyTagInput = {
    contentId: string;
};
export type ContentTagUpdateWithoutTagInput = {
    content?: Prisma.ContentUpdateOneRequiredWithoutTagsNestedInput;
};
export type ContentTagUncheckedUpdateWithoutTagInput = {
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTagUncheckedUpdateManyWithoutTagInput = {
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContentTagSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    contentId?: boolean;
    tagId?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentTag"]>;
export type ContentTagSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    contentId?: boolean;
    tagId?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentTag"]>;
export type ContentTagSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    contentId?: boolean;
    tagId?: boolean;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contentTag"]>;
export type ContentTagSelectScalar = {
    contentId?: boolean;
    tagId?: boolean;
};
export type ContentTagOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"contentId" | "tagId", ExtArgs["result"]["contentTag"]>;
export type ContentTagInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type ContentTagIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type ContentTagIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type $ContentTagPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContentTag";
    objects: {
        content: Prisma.$ContentPayload<ExtArgs>;
        tag: Prisma.$TagPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        contentId: string;
        tagId: string;
    }, ExtArgs["result"]["contentTag"]>;
    composites: {};
};
export type ContentTagGetPayload<S extends boolean | null | undefined | ContentTagDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContentTagPayload, S>;
export type ContentTagCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContentTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContentTagCountAggregateInputType | true;
};
export interface ContentTagDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContentTag'];
        meta: {
            name: 'ContentTag';
        };
    };
    findUnique<T extends ContentTagFindUniqueArgs>(args: Prisma.SelectSubset<T, ContentTagFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContentTagClient<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContentTagFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContentTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentTagClient<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContentTagFindFirstArgs>(args?: Prisma.SelectSubset<T, ContentTagFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContentTagClient<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContentTagFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContentTagFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContentTagClient<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContentTagFindManyArgs>(args?: Prisma.SelectSubset<T, ContentTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContentTagCreateArgs>(args: Prisma.SelectSubset<T, ContentTagCreateArgs<ExtArgs>>): Prisma.Prisma__ContentTagClient<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContentTagCreateManyArgs>(args?: Prisma.SelectSubset<T, ContentTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContentTagCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContentTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContentTagDeleteArgs>(args: Prisma.SelectSubset<T, ContentTagDeleteArgs<ExtArgs>>): Prisma.Prisma__ContentTagClient<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContentTagUpdateArgs>(args: Prisma.SelectSubset<T, ContentTagUpdateArgs<ExtArgs>>): Prisma.Prisma__ContentTagClient<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContentTagDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContentTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContentTagUpdateManyArgs>(args: Prisma.SelectSubset<T, ContentTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContentTagUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContentTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContentTagUpsertArgs>(args: Prisma.SelectSubset<T, ContentTagUpsertArgs<ExtArgs>>): Prisma.Prisma__ContentTagClient<runtime.Types.Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContentTagCountArgs>(args?: Prisma.Subset<T, ContentTagCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContentTagCountAggregateOutputType> : number>;
    aggregate<T extends ContentTagAggregateArgs>(args: Prisma.Subset<T, ContentTagAggregateArgs>): Prisma.PrismaPromise<GetContentTagAggregateType<T>>;
    groupBy<T extends ContentTagGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContentTagGroupByArgs['orderBy'];
    } : {
        orderBy?: ContentTagGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContentTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContentTagFieldRefs;
}
export interface Prisma__ContentTagClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    content<T extends Prisma.ContentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContentDefaultArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tag<T extends Prisma.TagDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TagDefaultArgs<ExtArgs>>): Prisma.Prisma__TagClient<runtime.Types.Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContentTagFieldRefs {
    readonly contentId: Prisma.FieldRef<"ContentTag", 'String'>;
    readonly tagId: Prisma.FieldRef<"ContentTag", 'String'>;
}
export type ContentTagFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
    where: Prisma.ContentTagWhereUniqueInput;
};
export type ContentTagFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
    where: Prisma.ContentTagWhereUniqueInput;
};
export type ContentTagFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
    where?: Prisma.ContentTagWhereInput;
    orderBy?: Prisma.ContentTagOrderByWithRelationInput | Prisma.ContentTagOrderByWithRelationInput[];
    cursor?: Prisma.ContentTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentTagScalarFieldEnum | Prisma.ContentTagScalarFieldEnum[];
};
export type ContentTagFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
    where?: Prisma.ContentTagWhereInput;
    orderBy?: Prisma.ContentTagOrderByWithRelationInput | Prisma.ContentTagOrderByWithRelationInput[];
    cursor?: Prisma.ContentTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentTagScalarFieldEnum | Prisma.ContentTagScalarFieldEnum[];
};
export type ContentTagFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
    where?: Prisma.ContentTagWhereInput;
    orderBy?: Prisma.ContentTagOrderByWithRelationInput | Prisma.ContentTagOrderByWithRelationInput[];
    cursor?: Prisma.ContentTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContentTagScalarFieldEnum | Prisma.ContentTagScalarFieldEnum[];
};
export type ContentTagCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentTagCreateInput, Prisma.ContentTagUncheckedCreateInput>;
};
export type ContentTagCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContentTagCreateManyInput | Prisma.ContentTagCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContentTagCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    data: Prisma.ContentTagCreateManyInput | Prisma.ContentTagCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContentTagIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContentTagUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentTagUpdateInput, Prisma.ContentTagUncheckedUpdateInput>;
    where: Prisma.ContentTagWhereUniqueInput;
};
export type ContentTagUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContentTagUpdateManyMutationInput, Prisma.ContentTagUncheckedUpdateManyInput>;
    where?: Prisma.ContentTagWhereInput;
    limit?: number;
};
export type ContentTagUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContentTagUpdateManyMutationInput, Prisma.ContentTagUncheckedUpdateManyInput>;
    where?: Prisma.ContentTagWhereInput;
    limit?: number;
    include?: Prisma.ContentTagIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContentTagUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
    where: Prisma.ContentTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContentTagCreateInput, Prisma.ContentTagUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContentTagUpdateInput, Prisma.ContentTagUncheckedUpdateInput>;
};
export type ContentTagDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
    where: Prisma.ContentTagWhereUniqueInput;
};
export type ContentTagDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContentTagWhereInput;
    limit?: number;
};
export type ContentTagDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContentTagSelect<ExtArgs> | null;
    omit?: Prisma.ContentTagOmit<ExtArgs> | null;
    include?: Prisma.ContentTagInclude<ExtArgs> | null;
};
export {};
