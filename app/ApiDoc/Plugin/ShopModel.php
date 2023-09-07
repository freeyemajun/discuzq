<?php
/**
 * @OA\Schema(
 *     schema="shop",
 *     title="商品插件的入参和出参",
 *     description = "帖子indexs中对应的入参和出参,接口：/api/v3/thread.create",
 *     @OA\Property(property = "输入", type = "object", description = "商品插件入参",
 *         @OA\Property(property = "products", type = "array", description = "商品列表" , @OA\Items(type = "object",
 *               @OA\Property(property = "type", type = "integer", description = "商品类型（10原来解析 11微信小商店）"),
 *               @OA\Property(property = "data", type = "object", description = "根据不同商品类型自行设定"),
 *         )),
 *     ),
 *     @OA\Property(property = "输出", type = "object", description = "商品插件出参",
 *          @OA\Property(property = "products", type = "array", description = "商品列表" , @OA\Items(type = "object",
 *               @OA\Property(property = "type", type = "integer", description = "商品类型（10原来解析 11微信小商店）"),
 *               @OA\Property(property = "data", type = "object", description = "根据不同商品类型自行设定"),
 *         )),
 *     ),
 *     @OA\Property(property = "类型11输入data", type = "object", description = "类型11输入",
 *         @OA\Property(property = "productId", type = "string", description = "商品id" ),
 *     ),
 *     @OA\Property(property = "类型11输出data", type = "object", description = "类型11出参",
 *          @OA\Property(property = "id", type = "integer", description = "微信小商店表中id" ),
 *          @OA\Property(property = "appId", type = "string", description = "插件appid" ),
 *          @OA\Property(property = "productId", type = "string", description = "商品id" ),
 *          @OA\Property(property = "title", type = "string", description = "商品名" ),
 *          @OA\Property(property = "imagePath", type = "string", description = "商品图片url" ),
 *          @OA\Property(property = "price", type = "string", description = "商品价格" ),
 *          @OA\Property(property = "path", type = "string", description = "商品详情页路径" ),
 *          @OA\Property(property = "detailUrl", type = "string", description = "商品详情页url(微信内部跳转)" ),
 *          @OA\Property(property = "detailQrcode", type = "string", description = "商品详情页二维码url" ),
 *          @OA\Property(property = "detailScheme", type = "string", description = "商品详情页url(外部跳转)" ),
 *     )
 * )
 */