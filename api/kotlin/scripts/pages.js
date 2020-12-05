var pages = [{"name":"fun fptree(minSupport: Int, supplier: Supplier<Stream<IntArray>>): FPTree","description":"smile.association.fptree","location":"smile-kotlin/smile.association/fptree.html","searchKeys":["fptree","fun fptree(minSupport: Int, supplier: Supplier<Stream<IntArray>>): FPTree"]},{"name":"fun adaboost(formula: Formula, data: DataFrame, ntrees: Int = 500, maxDepth: Int = 20, maxNodes: Int = 6, nodeSize: Int = 1): AdaBoost","description":"smile.classification.adaboost","location":"smile-kotlin/smile.classification/adaboost.html","searchKeys":["adaboost","fun adaboost(formula: Formula, data: DataFrame, ntrees: Int = 500, maxDepth: Int = 20, maxNodes: Int = 6, nodeSize: Int = 1): AdaBoost"]},{"name":"fun cart(formula: Formula, data: DataFrame, splitRule: SplitRule = SplitRule.GINI, maxDepth: Int = 20, maxNodes: Int = 0, nodeSize: Int = 5): DecisionTree","description":"smile.classification.cart","location":"smile-kotlin/smile.classification/cart.html","searchKeys":["cart","fun cart(formula: Formula, data: DataFrame, splitRule: SplitRule = SplitRule.GINI, maxDepth: Int = 20, maxNodes: Int = 0, nodeSize: Int = 5): DecisionTree"]},{"name":"fun cart(formula: Formula, data: DataFrame, maxDepth: Int = 20, maxNodes: Int = 0, nodeSize: Int = 5): RegressionTree","description":"smile.regression.cart","location":"smile-kotlin/smile.regression/cart.html","searchKeys":["cart","fun cart(formula: Formula, data: DataFrame, maxDepth: Int = 20, maxNodes: Int = 0, nodeSize: Int = 5): RegressionTree"]},{"name":"fun fisher(x: Array<DoubleArray>, y: IntArray, L: Int = -1, tol: Double = 0.0001): FLD","description":"smile.classification.fisher","location":"smile-kotlin/smile.classification/fisher.html","searchKeys":["fisher","fun fisher(x: Array<DoubleArray>, y: IntArray, L: Int = -1, tol: Double = 0.0001): FLD"]},{"name":"fun gbm(formula: Formula, data: DataFrame, ntrees: Int = 500, maxDepth: Int = 20, maxNodes: Int = 6, nodeSize: Int = 5, shrinkage: Double = 0.05, subsample: Double = 0.7): GradientTreeBoost","description":"smile.classification.gbm","location":"smile-kotlin/smile.classification/gbm.html","searchKeys":["gbm","fun gbm(formula: Formula, data: DataFrame, ntrees: Int = 500, maxDepth: Int = 20, maxNodes: Int = 6, nodeSize: Int = 5, shrinkage: Double = 0.05, subsample: Double = 0.7): GradientTreeBoost"]},{"name":"fun gbm(formula: Formula, data: DataFrame, loss: Loss = Loss.lad(), ntrees: Int = 500, maxDepth: Int = 20, maxNodes: Int = 6, nodeSize: Int = 5, shrinkage: Double = 0.05, subsample: Double = 0.7): GradientTreeBoost","description":"smile.regression.gbm","location":"smile-kotlin/smile.regression/gbm.html","searchKeys":["gbm","fun gbm(formula: Formula, data: DataFrame, loss: Loss = Loss.lad(), ntrees: Int = 500, maxDepth: Int = 20, maxNodes: Int = 6, nodeSize: Int = 5, shrinkage: Double = 0.05, subsample: Double = 0.7): GradientTreeBoost"]},{"name":"fun lda(x: Array<DoubleArray>, y: IntArray, priori: DoubleArray? = null, tol: Double = 0.0001): LDA","description":"smile.classification.lda","location":"smile-kotlin/smile.classification/lda.html","searchKeys":["lda","fun lda(x: Array<DoubleArray>, y: IntArray, priori: DoubleArray? = null, tol: Double = 0.0001): LDA"]},{"name":"fun logit(x: Array<DoubleArray>, y: IntArray, lambda: Double = 0.0, tol: Double = 1E-5, maxIter: Int = 500): LogisticRegression","description":"smile.classification.logit","location":"smile-kotlin/smile.classification/logit.html","searchKeys":["logit","fun logit(x: Array<DoubleArray>, y: IntArray, lambda: Double = 0.0, tol: Double = 1E-5, maxIter: Int = 500): LogisticRegression"]},{"name":"fun maxent(x: Array<IntArray>, y: IntArray, p: Int, lambda: Double = 0.1, tol: Double = 1E-5, maxIter: Int = 500): Maxent","description":"smile.classification.maxent","location":"smile-kotlin/smile.classification/maxent.html","searchKeys":["maxent","fun maxent(x: Array<IntArray>, y: IntArray, p: Int, lambda: Double = 0.1, tol: Double = 1E-5, maxIter: Int = 500): Maxent"]},{"name":"fun mlp(x: Array<DoubleArray>, y: IntArray, builders: Array<LayerBuilder>, epochs: Int = 10, learningRate: TimeFunction = TimeFunction.linear(0.01, 10000.0, 0.001), momentum: TimeFunction = TimeFunction.constant(0.0), weightDecay: Double = 0.0, rho: Double = 0.0, epsilon: Double = 1E-7): MLP","description":"smile.classification.mlp","location":"smile-kotlin/smile.classification/mlp.html","searchKeys":["mlp","fun mlp(x: Array<DoubleArray>, y: IntArray, builders: Array<LayerBuilder>, epochs: Int = 10, learningRate: TimeFunction = TimeFunction.linear(0.01, 10000.0, 0.001), momentum: TimeFunction = TimeFunction.constant(0.0), weightDecay: Double = 0.0, rho: Double = 0.0, epsilon: Double = 1E-7): MLP"]},{"name":"fun <T> ovo(x: Array<T>, y: IntArray, trainer: (Array<T>, IntArray) -> Classifier<T>): OneVersusOne<T>","description":"smile.classification.ovo","location":"smile-kotlin/smile.classification/ovo.html","searchKeys":["ovo","fun <T> ovo(x: Array<T>, y: IntArray, trainer: (Array<T>, IntArray) -> Classifier<T>): OneVersusOne<T>"]},{"name":"fun <T> ovr(x: Array<T>, y: IntArray, trainer: (Array<T>, IntArray) -> Classifier<T>): OneVersusRest<T>","description":"smile.classification.ovr","location":"smile-kotlin/smile.classification/ovr.html","searchKeys":["ovr","fun <T> ovr(x: Array<T>, y: IntArray, trainer: (Array<T>, IntArray) -> Classifier<T>): OneVersusRest<T>"]},{"name":"fun qda(x: Array<DoubleArray>, y: IntArray, priori: DoubleArray? = null, tol: Double = 0.0001): QDA","description":"smile.classification.qda","location":"smile-kotlin/smile.classification/qda.html","searchKeys":["qda","fun qda(x: Array<DoubleArray>, y: IntArray, priori: DoubleArray? = null, tol: Double = 0.0001): QDA"]},{"name":"fun randomForest(formula: Formula, data: DataFrame, ntrees: Int = 500, mtry: Int = 0, splitRule: SplitRule = SplitRule.GINI, maxDepth: Int = 20, maxNodes: Int = 500, nodeSize: Int = 1, subsample: Double = 1.0, classWeight: IntArray? = null, seeds: LongStream? = null): RandomForest","description":"smile.classification.randomForest","location":"smile-kotlin/smile.classification/random-forest.html","searchKeys":["randomForest","fun randomForest(formula: Formula, data: DataFrame, ntrees: Int = 500, mtry: Int = 0, splitRule: SplitRule = SplitRule.GINI, maxDepth: Int = 20, maxNodes: Int = 500, nodeSize: Int = 1, subsample: Double = 1.0, classWeight: IntArray? = null, seeds: LongStream? = null): RandomForest"]},{"name":"fun randomForest(formula: Formula, data: DataFrame, ntrees: Int = 500, mtry: Int = 0, maxDepth: Int = 20, maxNodes: Int = 500, nodeSize: Int = 5, subsample: Double = 1.0): RandomForest","description":"smile.regression.randomForest","location":"smile-kotlin/smile.regression/random-forest.html","searchKeys":["randomForest","fun randomForest(formula: Formula, data: DataFrame, ntrees: Int = 500, mtry: Int = 0, maxDepth: Int = 20, maxNodes: Int = 500, nodeSize: Int = 5, subsample: Double = 1.0): RandomForest"]},{"name":"fun rda(x: Array<DoubleArray>, y: IntArray, alpha: Double, priori: DoubleArray? = null, tol: Double = 0.0001): RDA","description":"smile.classification.rda","location":"smile-kotlin/smile.classification/rda.html","searchKeys":["rda","fun rda(x: Array<DoubleArray>, y: IntArray, alpha: Double, priori: DoubleArray? = null, tol: Double = 0.0001): RDA"]},{"name":"fun <T> svm(x: Array<T>, y: IntArray, kernel: MercerKernel<T>, C: Double, tol: Double = 1E-3): SVM<T>","description":"smile.classification.svm","location":"smile-kotlin/smile.classification/svm.html","searchKeys":["svm","fun <T> svm(x: Array<T>, y: IntArray, kernel: MercerKernel<T>, C: Double, tol: Double = 1E-3): SVM<T>"]},{"name":"fun <T> clarans(data: Array<T>, distance: Distance<T>, k: Int, maxNeighbor: Int, numLocal: Int = 16): CLARANS<T>","description":"smile.clustering.clarans","location":"smile-kotlin/smile.clustering/clarans.html","searchKeys":["clarans","fun <T> clarans(data: Array<T>, distance: Distance<T>, k: Int, maxNeighbor: Int, numLocal: Int = 16): CLARANS<T>"]},{"name":"fun dac(data: Array<DoubleArray>, k: Int, alpha: Double = 0.9, maxIter: Int = 100, tol: Double = 1E-4, splitTol: Double = 1E-2): DeterministicAnnealing","description":"smile.clustering.dac","location":"smile-kotlin/smile.clustering/dac.html","searchKeys":["dac","fun dac(data: Array<DoubleArray>, k: Int, alpha: Double = 0.9, maxIter: Int = 100, tol: Double = 1E-4, splitTol: Double = 1E-2): DeterministicAnnealing"]},{"name":"fun denclue(data: Array<DoubleArray>, sigma: Double, m: Int): DENCLUE","description":"smile.clustering.denclue","location":"smile-kotlin/smile.clustering/denclue.html","searchKeys":["denclue","fun denclue(data: Array<DoubleArray>, sigma: Double, m: Int): DENCLUE"]},{"name":"fun gmeans(data: Array<DoubleArray>, k: Int = 100): GMeans","description":"smile.clustering.gmeans","location":"smile-kotlin/smile.clustering/gmeans.html","searchKeys":["gmeans","fun gmeans(data: Array<DoubleArray>, k: Int = 100): GMeans"]},{"name":"fun kmeans(data: Array<DoubleArray>, k: Int, maxIter: Int = 100, tol: Double = 1E-4, runs: Int = 16): KMeans","description":"smile.clustering.kmeans","location":"smile-kotlin/smile.clustering/kmeans.html","searchKeys":["kmeans","fun kmeans(data: Array<DoubleArray>, k: Int, maxIter: Int = 100, tol: Double = 1E-4, runs: Int = 16): KMeans"]},{"name":"fun kmodes(data: Array<IntArray>, k: Int, maxIter: Int = 100, runs: Int = 10): KModes","description":"smile.clustering.kmodes","location":"smile-kotlin/smile.clustering/kmodes.html","searchKeys":["kmodes","fun kmodes(data: Array<IntArray>, k: Int, maxIter: Int = 100, runs: Int = 10): KModes"]},{"name":"fun sib(data: Array<SparseArray>, k: Int, maxIter: Int = 100, runs: Int = 8): SIB","description":"smile.clustering.sib","location":"smile-kotlin/smile.clustering/sib.html","searchKeys":["sib","fun sib(data: Array<SparseArray>, k: Int, maxIter: Int = 100, runs: Int = 8): SIB"]},{"name":"fun xmeans(data: Array<DoubleArray>, k: Int = 100): XMeans","description":"smile.clustering.xmeans","location":"smile-kotlin/smile.clustering/xmeans.html","searchKeys":["xmeans","fun xmeans(data: Array<DoubleArray>, k: Int = 100): XMeans"]},{"name":"fun isomap(data: Array<DoubleArray>, k: Int, d: Int = 2, CIsomap: Boolean = true): IsoMap","description":"smile.manifold.isomap","location":"smile-kotlin/smile.manifold/isomap.html","searchKeys":["isomap","fun isomap(data: Array<DoubleArray>, k: Int, d: Int = 2, CIsomap: Boolean = true): IsoMap"]},{"name":"fun laplacian(data: Array<DoubleArray>, k: Int, d: Int = 2, t: Double = -1.0): LaplacianEigenmap","description":"smile.manifold.laplacian","location":"smile-kotlin/smile.manifold/laplacian.html","searchKeys":["laplacian","fun laplacian(data: Array<DoubleArray>, k: Int, d: Int = 2, t: Double = -1.0): LaplacianEigenmap"]},{"name":"fun lle(data: Array<DoubleArray>, k: Int, d: Int = 2): LLE","description":"smile.manifold.lle","location":"smile-kotlin/smile.manifold/lle.html","searchKeys":["lle","fun lle(data: Array<DoubleArray>, k: Int, d: Int = 2): LLE"]},{"name":"fun tsne(X: Array<DoubleArray>, d: Int = 2, perplexity: Double = 20.0, eta: Double = 200.0, iterations: Int = 1000): TSNE","description":"smile.manifold.tsne","location":"smile-kotlin/smile.manifold/tsne.html","searchKeys":["tsne","fun tsne(X: Array<DoubleArray>, d: Int = 2, perplexity: Double = 20.0, eta: Double = 200.0, iterations: Int = 1000): TSNE"]},{"name":"fun isomds(proximity: Array<DoubleArray>, k: Int, tol: Double = 0.0001, maxIter: Int = 200): IsotonicMDS","description":"smile.mds.isomds","location":"smile-kotlin/smile.mds/isomds.html","searchKeys":["isomds","fun isomds(proximity: Array<DoubleArray>, k: Int, tol: Double = 0.0001, maxIter: Int = 200): IsotonicMDS"]},{"name":"fun mds(proximity: Array<DoubleArray>, k: Int, positive: Boolean = false): MDS","description":"smile.mds.mds","location":"smile-kotlin/smile.mds/mds.html","searchKeys":["mds","fun mds(proximity: Array<DoubleArray>, k: Int, positive: Boolean = false): MDS"]},{"name":"fun sammon(proximity: Array<DoubleArray>, k: Int, lambda: Double = 0.2, tol: Double = 0.0001, stepTol: Double = 0.001, maxIter: Int = 100): SammonMapping","description":"smile.mds.sammon","location":"smile-kotlin/smile.mds/sammon.html","searchKeys":["sammon","fun sammon(proximity: Array<DoubleArray>, k: Int, lambda: Double = 0.2, tol: Double = 0.0001, stepTol: Double = 0.001, maxIter: Int = 100): SammonMapping"]},{"name":"fun String.bag(filter: String = \"default\", stemmer: Stemmer? = porter): Map<String, Int>","description":"smile.nlp.bag","location":"smile-kotlin/smile.nlp/bag.html","searchKeys":["bag","fun String.bag(filter: String = \"default\", stemmer: Stemmer? = porter): Map<String, Int>"]},{"name":"fun String.bag2(filter: String = \"default\", stemmer: Stemmer? = porter): Set<String>","description":"smile.nlp.bag2","location":"smile-kotlin/smile.nlp/bag2.html","searchKeys":["bag2","fun String.bag2(filter: String = \"default\", stemmer: Stemmer? = porter): Set<String>"]},{"name":"fun corpus(text: List<String>): SimpleCorpus","description":"smile.nlp.corpus","location":"smile-kotlin/smile.nlp/corpus.html","searchKeys":["corpus","fun corpus(text: List<String>): SimpleCorpus"]},{"name":"fun df(terms: List<String>, corpus: List<Map<String, Int>>): IntArray","description":"smile.nlp.df","location":"smile-kotlin/smile.nlp/df.html","searchKeys":["df","fun df(terms: List<String>, corpus: List<Map<String, Int>>): IntArray"]},{"name":"fun String.keywords(k: Int = 10): Array<NGram>","description":"smile.nlp.keywords","location":"smile-kotlin/smile.nlp/keywords.html","searchKeys":["keywords","fun String.keywords(k: Int = 10): Array<NGram>"]},{"name":"fun lancaster(word: String): String","description":"smile.nlp.lancaster","location":"smile-kotlin/smile.nlp/lancaster.html","searchKeys":["lancaster","fun lancaster(word: String): String"]},{"name":"fun ngram(maxNGramSize: Int, minFreq: Int, text: List<String>): Array<Array<NGram>>","description":"smile.nlp.ngram","location":"smile-kotlin/smile.nlp/ngram.html","searchKeys":["ngram","fun ngram(maxNGramSize: Int, minFreq: Int, text: List<String>): Array<Array<NGram>>"]},{"name":"fun String.normalize(): String","description":"smile.nlp.normalize","location":"smile-kotlin/smile.nlp/normalize.html","searchKeys":["normalize","fun String.normalize(): String"]},{"name":"fun porter(word: String): String","description":"smile.nlp.porter","location":"smile-kotlin/smile.nlp/porter.html","searchKeys":["porter","fun porter(word: String): String"]},{"name":"fun String.sentences(): Array<String>","description":"smile.nlp.sentences","location":"smile-kotlin/smile.nlp/sentences.html","searchKeys":["sentences","fun String.sentences(): Array<String>"]},{"name":"fun String.words(filter: String = \"default\"): Array<String>","description":"smile.nlp.words","location":"smile-kotlin/smile.nlp/words.html","searchKeys":["words","fun String.words(filter: String = \"default\"): Array<String>"]},{"name":"fun <T> kpca(data: Array<T>, kernel: MercerKernel<T>, k: Int, threshold: Double = 0.0001): KPCA<T>","description":"smile.projection.kpca","location":"smile-kotlin/smile.projection/kpca.html","searchKeys":["kpca","fun <T> kpca(data: Array<T>, kernel: MercerKernel<T>, k: Int, threshold: Double = 0.0001): KPCA<T>"]},{"name":"fun pca(data: Array<DoubleArray>, cor: Boolean = false): PCA","description":"smile.projection.pca","location":"smile-kotlin/smile.projection/pca.html","searchKeys":["pca","fun pca(data: Array<DoubleArray>, cor: Boolean = false): PCA"]},{"name":"fun ppca(data: Array<DoubleArray>, k: Int): ProbabilisticPCA","description":"smile.projection.ppca","location":"smile-kotlin/smile.projection/ppca.html","searchKeys":["ppca","fun ppca(data: Array<DoubleArray>, k: Int): ProbabilisticPCA"]},{"name":"object read","description":"smile.read","location":"smile-kotlin/smile/read/index.html","searchKeys":["read","object read"]},{"name":"fun jdbc(rs: ResultSet): DataFrame","description":"smile.read.jdbc","location":"smile-kotlin/smile/read/jdbc.html","searchKeys":["jdbc","fun jdbc(rs: ResultSet): DataFrame"]},{"name":"object gpr","description":"smile.regression.gpr","location":"smile-kotlin/smile.regression/gpr/index.html","searchKeys":["gpr","object gpr"]},{"name":"fun <T> approx(x: Array<T>, y: DoubleArray, t: Array<T>, kernel: MercerKernel<T>, noise: Double, normalize: Boolean = true): GaussianProcessRegression<T>","description":"smile.regression.gpr.approx","location":"smile-kotlin/smile.regression/gpr/approx.html","searchKeys":["approx","fun <T> approx(x: Array<T>, y: DoubleArray, t: Array<T>, kernel: MercerKernel<T>, noise: Double, normalize: Boolean = true): GaussianProcessRegression<T>"]},{"name":"fun <T> nystrom(x: Array<T>, y: DoubleArray, t: Array<T>, kernel: MercerKernel<T>, noise: Double, normalize: Boolean = true): GaussianProcessRegression<T>","description":"smile.regression.gpr.nystrom","location":"smile-kotlin/smile.regression/gpr/nystrom.html","searchKeys":["nystrom","fun <T> nystrom(x: Array<T>, y: DoubleArray, t: Array<T>, kernel: MercerKernel<T>, noise: Double, normalize: Boolean = true): GaussianProcessRegression<T>"]},{"name":"fun lasso(formula: Formula, data: DataFrame, lambda: Double, tol: Double = 1E-3, maxIter: Int = 5000): LinearModel","description":"smile.regression.lasso","location":"smile-kotlin/smile.regression/lasso.html","searchKeys":["lasso","fun lasso(formula: Formula, data: DataFrame, lambda: Double, tol: Double = 1E-3, maxIter: Int = 5000): LinearModel"]},{"name":"fun lm(formula: Formula, data: DataFrame, method: String = \"qr\", stderr: Boolean = true, recursive: Boolean = true): LinearModel","description":"smile.regression.lm","location":"smile-kotlin/smile.regression/lm.html","searchKeys":["lm","fun lm(formula: Formula, data: DataFrame, method: String = \"qr\", stderr: Boolean = true, recursive: Boolean = true): LinearModel"]},{"name":"fun ridge(formula: Formula, data: DataFrame, lambda: Double): LinearModel","description":"smile.regression.ridge","location":"smile-kotlin/smile.regression/ridge.html","searchKeys":["ridge","fun ridge(formula: Formula, data: DataFrame, lambda: Double): LinearModel"]},{"name":"fun <T> svr(x: Array<T>, y: DoubleArray, kernel: MercerKernel<T>, eps: Double, C: Double, tol: Double = 1E-3): KernelMachine<T>","description":"smile.regression.svr","location":"smile-kotlin/smile.regression/svr.html","searchKeys":["svr","fun <T> svr(x: Array<T>, y: DoubleArray, kernel: MercerKernel<T>, eps: Double, C: Double, tol: Double = 1E-3): KernelMachine<T>"]},{"name":"fun dwt(t: DoubleArray, filter: String)","description":"smile.wavelet.dwt","location":"smile-kotlin/smile.wavelet/dwt.html","searchKeys":["dwt","fun dwt(t: DoubleArray, filter: String)"]},{"name":"fun idwt(wt: DoubleArray, filter: String)","description":"smile.wavelet.idwt","location":"smile-kotlin/smile.wavelet/idwt.html","searchKeys":["idwt","fun idwt(wt: DoubleArray, filter: String)"]},{"name":"fun wavelet(filter: String): Wavelet","description":"smile.wavelet.wavelet","location":"smile-kotlin/smile.wavelet/wavelet.html","searchKeys":["wavelet","fun wavelet(filter: String): Wavelet"]},{"name":"fun wsdenoise(t: DoubleArray, filter: String, soft: Boolean = false)","description":"smile.wavelet.wsdenoise","location":"smile-kotlin/smile.wavelet/wsdenoise.html","searchKeys":["wsdenoise","fun wsdenoise(t: DoubleArray, filter: String, soft: Boolean = false)"]},{"name":"object write","description":"smile.write","location":"smile-kotlin/smile/write/index.html","searchKeys":["write","object write"]}]
