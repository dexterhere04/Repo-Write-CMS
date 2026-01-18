import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LikeModel = runtime.Types.Result.DefaultSelection<Prisma.$LikePayload>;
export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null;
    _min: LikeMinAggregateOutputType | null;
    _max: LikeMaxAggregateOutputType | null;
};
export type LikeMinAggregateOutputType = {
    userId: string | null;
    contentId: string | null;
    createdAt: Date | null;
};
export type LikeMaxAggregateOutputType = {
    userId: string | null;
    contentId: string | null;
    createdAt: Date | null;
};
export type LikeCountAggregateOutputType = {
    userId: number;
    contentId: number;
    createdAt: number;
    _all: number;
};
export type LikeMinAggregateInputType = {
    userId?: true;
    contentId?: true;
    createdAt?: true;
};
export type LikeMaxAggregateInputType = {
    userId?: true;
    contentId?: true;
    createdAt?: true;
};
export type LikeCountAggregateInputType = {
    userId?: true;
    contentId?: true;
    createdAt?: true;
    _all?: true;
};
export type LikeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    cursor?: Prisma.LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LikeCountAggregateInputType;
    _min?: LikeMinAggregateInputType;
    _max?: LikeMaxAggregateInputType;
};
export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
    [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLike[P]> : Prisma.GetScalarType<T[P], AggregateLike[P]>;
};
export type LikeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithAggregationInput | Prisma.LikeOrderByWithAggregationInput[];
    by: Prisma.LikeScalarFieldEnum[] | Prisma.LikeScalarFieldEnum;
    having?: Prisma.LikeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LikeCountAggregateInputType | true;
    _min?: LikeMinAggregateInputType;
    _max?: LikeMaxAggregateInputType;
};
export type LikeGroupByOutputType = {
    userId: string;
    contentId: string;
    createdAt: Date;
    _count: LikeCountAggregateOutputType | null;
    _min: LikeMinAggregateOutputType | null;
    _max: LikeMaxAggregateOutputType | null;
};
type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LikeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LikeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LikeGroupByOutputType[P]>;
}>>;
export type LikeWhereInput = {
    AND?: Prisma.LikeWhereInput | Prisma.LikeWhereInput[];
    OR?: Prisma.LikeWhereInput[];
    NOT?: Prisma.LikeWhereInput | Prisma.LikeWhereInput[];
    userId?: Prisma.StringFilter<"Like"> | string;
    contentId?: Prisma.StringFilter<"Like"> | string;
    createdAt?: Prisma.DateTimeFilter<"Like"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
};
export type LikeOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    content?: Prisma.ContentOrderByWithRelationInput;
};
export type LikeWhereUniqueInput = Prisma.AtLeast<{
    userId_contentId?: Prisma.LikeUserIdContentIdCompoundUniqueInput;
    AND?: Prisma.LikeWhereInput | Prisma.LikeWhereInput[];
    OR?: Prisma.LikeWhereInput[];
    NOT?: Prisma.LikeWhereInput | Prisma.LikeWhereInput[];
    userId?: Prisma.StringFilter<"Like"> | string;
    contentId?: Prisma.StringFilter<"Like"> | string;
    createdAt?: Prisma.DateTimeFilter<"Like"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    content?: Prisma.XOR<Prisma.ContentScalarRelationFilter, Prisma.ContentWhereInput>;
}, "userId_contentId">;
export type LikeOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LikeCountOrderByAggregateInput;
    _max?: Prisma.LikeMaxOrderByAggregateInput;
    _min?: Prisma.LikeMinOrderByAggregateInput;
};
export type LikeScalarWhereWithAggregatesInput = {
    AND?: Prisma.LikeScalarWhereWithAggregatesInput | Prisma.LikeScalarWhereWithAggregatesInput[];
    OR?: Prisma.LikeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LikeScalarWhereWithAggregatesInput | Prisma.LikeScalarWhereWithAggregatesInput[];
    userId?: Prisma.StringWithAggregatesFilter<"Like"> | string;
    contentId?: Prisma.StringWithAggregatesFilter<"Like"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Like"> | Date | string;
};
export type LikeCreateInput = {
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLikesInput;
    content: Prisma.ContentCreateNestedOneWithoutLikesInput;
};
export type LikeUncheckedCreateInput = {
    userId: string;
    contentId: string;
    createdAt?: Date | string;
};
export type LikeUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLikesNestedInput;
    content?: Prisma.ContentUpdateOneRequiredWithoutLikesNestedInput;
};
export type LikeUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeCreateManyInput = {
    userId: string;
    contentId: string;
    createdAt?: Date | string;
};
export type LikeUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeListRelationFilter = {
    every?: Prisma.LikeWhereInput;
    some?: Prisma.LikeWhereInput;
    none?: Prisma.LikeWhereInput;
};
export type LikeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LikeUserIdContentIdCompoundUniqueInput = {
    userId: string;
    contentId: string;
};
export type LikeCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LikeMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LikeMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    contentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LikeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput> | Prisma.LikeCreateWithoutUserInput[] | Prisma.LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutUserInput | Prisma.LikeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LikeCreateManyUserInputEnvelope;
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
};
export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput> | Prisma.LikeCreateWithoutUserInput[] | Prisma.LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutUserInput | Prisma.LikeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LikeCreateManyUserInputEnvelope;
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
};
export type LikeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput> | Prisma.LikeCreateWithoutUserInput[] | Prisma.LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutUserInput | Prisma.LikeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LikeUpsertWithWhereUniqueWithoutUserInput | Prisma.LikeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LikeCreateManyUserInputEnvelope;
    set?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    disconnect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    delete?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    update?: Prisma.LikeUpdateWithWhereUniqueWithoutUserInput | Prisma.LikeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LikeUpdateManyWithWhereWithoutUserInput | Prisma.LikeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
};
export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput> | Prisma.LikeCreateWithoutUserInput[] | Prisma.LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutUserInput | Prisma.LikeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LikeUpsertWithWhereUniqueWithoutUserInput | Prisma.LikeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LikeCreateManyUserInputEnvelope;
    set?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    disconnect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    delete?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    update?: Prisma.LikeUpdateWithWhereUniqueWithoutUserInput | Prisma.LikeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LikeUpdateManyWithWhereWithoutUserInput | Prisma.LikeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
};
export type LikeCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutContentInput, Prisma.LikeUncheckedCreateWithoutContentInput> | Prisma.LikeCreateWithoutContentInput[] | Prisma.LikeUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutContentInput | Prisma.LikeCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.LikeCreateManyContentInputEnvelope;
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
};
export type LikeUncheckedCreateNestedManyWithoutContentInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutContentInput, Prisma.LikeUncheckedCreateWithoutContentInput> | Prisma.LikeCreateWithoutContentInput[] | Prisma.LikeUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutContentInput | Prisma.LikeCreateOrConnectWithoutContentInput[];
    createMany?: Prisma.LikeCreateManyContentInputEnvelope;
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
};
export type LikeUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutContentInput, Prisma.LikeUncheckedCreateWithoutContentInput> | Prisma.LikeCreateWithoutContentInput[] | Prisma.LikeUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutContentInput | Prisma.LikeCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.LikeUpsertWithWhereUniqueWithoutContentInput | Prisma.LikeUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.LikeCreateManyContentInputEnvelope;
    set?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    disconnect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    delete?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    update?: Prisma.LikeUpdateWithWhereUniqueWithoutContentInput | Prisma.LikeUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.LikeUpdateManyWithWhereWithoutContentInput | Prisma.LikeUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
};
export type LikeUncheckedUpdateManyWithoutContentNestedInput = {
    create?: Prisma.XOR<Prisma.LikeCreateWithoutContentInput, Prisma.LikeUncheckedCreateWithoutContentInput> | Prisma.LikeCreateWithoutContentInput[] | Prisma.LikeUncheckedCreateWithoutContentInput[];
    connectOrCreate?: Prisma.LikeCreateOrConnectWithoutContentInput | Prisma.LikeCreateOrConnectWithoutContentInput[];
    upsert?: Prisma.LikeUpsertWithWhereUniqueWithoutContentInput | Prisma.LikeUpsertWithWhereUniqueWithoutContentInput[];
    createMany?: Prisma.LikeCreateManyContentInputEnvelope;
    set?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    disconnect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    delete?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    connect?: Prisma.LikeWhereUniqueInput | Prisma.LikeWhereUniqueInput[];
    update?: Prisma.LikeUpdateWithWhereUniqueWithoutContentInput | Prisma.LikeUpdateWithWhereUniqueWithoutContentInput[];
    updateMany?: Prisma.LikeUpdateManyWithWhereWithoutContentInput | Prisma.LikeUpdateManyWithWhereWithoutContentInput[];
    deleteMany?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
};
export type LikeCreateWithoutUserInput = {
    createdAt?: Date | string;
    content: Prisma.ContentCreateNestedOneWithoutLikesInput;
};
export type LikeUncheckedCreateWithoutUserInput = {
    contentId: string;
    createdAt?: Date | string;
};
export type LikeCreateOrConnectWithoutUserInput = {
    where: Prisma.LikeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput>;
};
export type LikeCreateManyUserInputEnvelope = {
    data: Prisma.LikeCreateManyUserInput | Prisma.LikeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LikeWhereUniqueInput;
    update: Prisma.XOR<Prisma.LikeUpdateWithoutUserInput, Prisma.LikeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LikeCreateWithoutUserInput, Prisma.LikeUncheckedCreateWithoutUserInput>;
};
export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LikeWhereUniqueInput;
    data: Prisma.XOR<Prisma.LikeUpdateWithoutUserInput, Prisma.LikeUncheckedUpdateWithoutUserInput>;
};
export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LikeScalarWhereInput;
    data: Prisma.XOR<Prisma.LikeUpdateManyMutationInput, Prisma.LikeUncheckedUpdateManyWithoutUserInput>;
};
export type LikeScalarWhereInput = {
    AND?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
    OR?: Prisma.LikeScalarWhereInput[];
    NOT?: Prisma.LikeScalarWhereInput | Prisma.LikeScalarWhereInput[];
    userId?: Prisma.StringFilter<"Like"> | string;
    contentId?: Prisma.StringFilter<"Like"> | string;
    createdAt?: Prisma.DateTimeFilter<"Like"> | Date | string;
};
export type LikeCreateWithoutContentInput = {
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLikesInput;
};
export type LikeUncheckedCreateWithoutContentInput = {
    userId: string;
    createdAt?: Date | string;
};
export type LikeCreateOrConnectWithoutContentInput = {
    where: Prisma.LikeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LikeCreateWithoutContentInput, Prisma.LikeUncheckedCreateWithoutContentInput>;
};
export type LikeCreateManyContentInputEnvelope = {
    data: Prisma.LikeCreateManyContentInput | Prisma.LikeCreateManyContentInput[];
    skipDuplicates?: boolean;
};
export type LikeUpsertWithWhereUniqueWithoutContentInput = {
    where: Prisma.LikeWhereUniqueInput;
    update: Prisma.XOR<Prisma.LikeUpdateWithoutContentInput, Prisma.LikeUncheckedUpdateWithoutContentInput>;
    create: Prisma.XOR<Prisma.LikeCreateWithoutContentInput, Prisma.LikeUncheckedCreateWithoutContentInput>;
};
export type LikeUpdateWithWhereUniqueWithoutContentInput = {
    where: Prisma.LikeWhereUniqueInput;
    data: Prisma.XOR<Prisma.LikeUpdateWithoutContentInput, Prisma.LikeUncheckedUpdateWithoutContentInput>;
};
export type LikeUpdateManyWithWhereWithoutContentInput = {
    where: Prisma.LikeScalarWhereInput;
    data: Prisma.XOR<Prisma.LikeUpdateManyMutationInput, Prisma.LikeUncheckedUpdateManyWithoutContentInput>;
};
export type LikeCreateManyUserInput = {
    contentId: string;
    createdAt?: Date | string;
};
export type LikeUpdateWithoutUserInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.ContentUpdateOneRequiredWithoutLikesNestedInput;
};
export type LikeUncheckedUpdateWithoutUserInput = {
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeUncheckedUpdateManyWithoutUserInput = {
    contentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeCreateManyContentInput = {
    userId: string;
    createdAt?: Date | string;
};
export type LikeUpdateWithoutContentInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLikesNestedInput;
};
export type LikeUncheckedUpdateWithoutContentInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeUncheckedUpdateManyWithoutContentInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LikeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    contentId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["like"]>;
export type LikeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    contentId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["like"]>;
export type LikeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    contentId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["like"]>;
export type LikeSelectScalar = {
    userId?: boolean;
    contentId?: boolean;
    createdAt?: boolean;
};
export type LikeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "contentId" | "createdAt", ExtArgs["result"]["like"]>;
export type LikeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type LikeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type LikeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    content?: boolean | Prisma.ContentDefaultArgs<ExtArgs>;
};
export type $LikePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Like";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        content: Prisma.$ContentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        contentId: string;
        createdAt: Date;
    }, ExtArgs["result"]["like"]>;
    composites: {};
};
export type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LikePayload, S>;
export type LikeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LikeCountAggregateInputType | true;
};
export interface LikeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Like'];
        meta: {
            name: 'Like';
        };
    };
    findUnique<T extends LikeFindUniqueArgs>(args: Prisma.SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LikeFindFirstArgs>(args?: Prisma.SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LikeFindManyArgs>(args?: Prisma.SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LikeCreateArgs>(args: Prisma.SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LikeCreateManyArgs>(args?: Prisma.SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LikeDeleteArgs>(args: Prisma.SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LikeUpdateArgs>(args: Prisma.SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LikeDeleteManyArgs>(args?: Prisma.SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LikeUpdateManyArgs>(args: Prisma.SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LikeUpsertArgs>(args: Prisma.SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma.Prisma__LikeClient<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LikeCountArgs>(args?: Prisma.Subset<T, LikeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LikeCountAggregateOutputType> : number>;
    aggregate<T extends LikeAggregateArgs>(args: Prisma.Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>;
    groupBy<T extends LikeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LikeGroupByArgs['orderBy'];
    } : {
        orderBy?: LikeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LikeFieldRefs;
}
export interface Prisma__LikeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    content<T extends Prisma.ContentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContentDefaultArgs<ExtArgs>>): Prisma.Prisma__ContentClient<runtime.Types.Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LikeFieldRefs {
    readonly userId: Prisma.FieldRef<"Like", 'String'>;
    readonly contentId: Prisma.FieldRef<"Like", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Like", 'DateTime'>;
}
export type LikeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where: Prisma.LikeWhereUniqueInput;
};
export type LikeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where: Prisma.LikeWhereUniqueInput;
};
export type LikeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    cursor?: Prisma.LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
export type LikeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    cursor?: Prisma.LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
export type LikeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    cursor?: Prisma.LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
export type LikeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LikeCreateInput, Prisma.LikeUncheckedCreateInput>;
};
export type LikeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LikeCreateManyInput | Prisma.LikeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LikeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    data: Prisma.LikeCreateManyInput | Prisma.LikeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LikeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LikeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LikeUpdateInput, Prisma.LikeUncheckedUpdateInput>;
    where: Prisma.LikeWhereUniqueInput;
};
export type LikeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LikeUpdateManyMutationInput, Prisma.LikeUncheckedUpdateManyInput>;
    where?: Prisma.LikeWhereInput;
    limit?: number;
};
export type LikeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LikeUpdateManyMutationInput, Prisma.LikeUncheckedUpdateManyInput>;
    where?: Prisma.LikeWhereInput;
    limit?: number;
    include?: Prisma.LikeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LikeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where: Prisma.LikeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LikeCreateInput, Prisma.LikeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LikeUpdateInput, Prisma.LikeUncheckedUpdateInput>;
};
export type LikeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where: Prisma.LikeWhereUniqueInput;
};
export type LikeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LikeWhereInput;
    limit?: number;
};
export type LikeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LikeSelect<ExtArgs> | null;
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    include?: Prisma.LikeInclude<ExtArgs> | null;
};
export {};
