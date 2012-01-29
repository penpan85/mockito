setClassUsage('org.mockito.internal.invocation.InvocationsFinder',
{"getFirstMatchingChunk(org.mockito.internal.invocation.InvocationMatcher,java.util.List)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinder","kind":"class","access":"public","line":15,"children":[{"name":"findMatchingChunk(List,InvocationMatcher,VerificationModeImpl):List","kind":"method","access":"public","line":41,"children":[{"name":"firstChunk","kind":"null","access":"default","local":true,"line":43,"leaves":[43]}]}]}]}]}]}]}]},"findFirstUnverified(java.util.List,java.lang.Object)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinder","kind":"class","access":"public","line":15,"children":[{"name":"findFirstUnverified(List):Invocation","kind":"method","access":"public","line":81,"leaves":[82]}]},{"name":"InvocationsFinderTest","kind":"class","access":"public","line":25,"children":[{"name":"shouldFindFirstUnverifiedInvocationOnMock():void","kind":"method","access":"public","line":66,"leaves":[68,69]}]}]}]}]}]}]},"findFirstUnverified(java.util.List)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinderTest","kind":"class","access":"public","line":25,"children":[{"name":"shouldFindFirstUnverifiedInvocation():void","kind":"method","access":"public","line":53,"leaves":[60,63,55]}]}]},{"kind":"package","name":"verification","classes":[{"name":"NoMoreInvocationsVerifier","kind":"class","access":"public","line":15,"children":[{"name":"verify(List,InvocationMatcher,VerificationModeImpl):void","kind":"method","access":"public","line":29,"children":[{"name":"unverified","kind":"null","access":"default","local":true,"line":34,"leaves":[34]}]}]}]}]}]}]}]},"findMatchingChunk(java.util.List,org.mockito.internal.invocation.InvocationMatcher,org.mockito.internal.progress.VerificationModeImpl)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinderTest","kind":"class","access":"public","line":25,"children":[{"name":"shouldFindMatchingChunk():void","kind":"method","access":"public","line":112,"children":[{"name":"chunk","kind":"null","access":"default","local":true,"line":115,"leaves":[115]}]},{"name":"shouldReturnAllChunksWhenWantedCountDoesntMatch():void","kind":"method","access":"public","line":129,"children":[{"name":"chunk","kind":"null","access":"default","local":true,"line":135,"leaves":[135]}]},{"name":"shouldReturnAllChunksWhenModeIsAtLeastOnce():void","kind":"method","access":"public","line":119,"children":[{"name":"chunk","kind":"null","access":"default","local":true,"line":125,"leaves":[125]}]}]}]},{"kind":"package","name":"verification","classes":[{"name":"NumberOfInvocationsInOrderVerifier","kind":"class","access":"public","line":16,"children":[{"name":"verify(List,InvocationMatcher,VerificationModeImpl):void","kind":"method","access":"public","line":30,"children":[{"name":"chunk","kind":"null","access":"default","local":true,"line":35,"leaves":[35]}]}]}]}]}]}]}]},"findSimilarInvocation(java.util.List,org.mockito.internal.invocation.InvocationMatcher,org.mockito.internal.progress.VerificationModeImpl)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinderTest","kind":"class","access":"public","line":25,"children":[{"name":"shouldFindFirstSimilarInvocationByName():void","kind":"method","access":"public","line":72,"children":[{"name":"found","kind":"null","access":"default","local":true,"line":76,"leaves":[76]}]},{"name":"shouldFindInvocationWithTheSameMethod():void","kind":"method","access":"public","line":80,"children":[{"name":"found","kind":"null","access":"default","local":true,"line":86,"leaves":[86]}]}]}]},{"kind":"package","name":"verification","classes":[{"name":"MissingInvocationVerifier","kind":"class","access":"public","line":15,"children":[{"name":"verify(List,InvocationMatcher,VerificationModeImpl):void","kind":"method","access":"public","line":29,"children":[{"name":"similar","kind":"null","access":"default","local":true,"line":37,"leaves":[37]}]}]}]}]}]}]}]},"findAllMatchingUnverifiedChunks(java.util.List,org.mockito.internal.invocation.InvocationMatcher)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinder","kind":"class","access":"public","line":15,"children":[{"name":"findMatchingChunk(List,InvocationMatcher,VerificationModeImpl):List","kind":"method","access":"public","line":41,"leaves":[46]}]},{"name":"InvocationsFinderTest","kind":"class","access":"public","line":25,"children":[{"name":"shouldFindAllMatchingUnverifiedChunks():void","kind":"method","access":"public","line":98,"children":[{"name":"allMatching","kind":"null","access":"default","local":true,"line":100,"leaves":[100]}],"leaves":[108,104]}]}]},{"kind":"package","name":"verification","classes":[{"name":"MissingInvocationInOrderVerifier","kind":"class","access":"public","line":15,"children":[{"name":"verify(List,InvocationMatcher,VerificationModeImpl):void","kind":"method","access":"public","line":29,"children":[{"name":"chunk","kind":"null","access":"default","local":true,"line":34,"leaves":[34]}]}]}]}]}]}]}]},"this":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinderTest","kind":"class","access":"public","line":25,"children":[{"name":"finder","kind":"field","access":"private","line":31,"leaves":[31]},{"name":"setup():void","kind":"method","access":"public","line":35,"leaves":[41]}]}]},{"kind":"package","name":"verification","classes":[{"name":"NoMoreInvocationsVerifier","kind":"class","access":"public","line":15,"children":[{"name":"NoMoreInvocationsVerifier()","kind":"method","access":"public","line":20,"leaves":[21]},{"name":"finder","kind":"field","access":"private","line":18,"leaves":[18]},{"name":"NoMoreInvocationsVerifier(InvocationsFinder,Reporter)","kind":"method","access":"public","line":24,"children":[{"name":"finder","kind":"null","access":"default","local":true,"line":24,"leaves":[24]}]}]},{"name":"NumberOfInvocationsInOrderVerifier","kind":"class","access":"public","line":16,"children":[{"name":"NumberOfInvocationsInOrderVerifier(InvocationsFinder,Reporter)","kind":"method","access":"public","line":25,"children":[{"name":"finder","kind":"null","access":"default","local":true,"line":25,"leaves":[25]}]},{"name":"NumberOfInvocationsInOrderVerifier()","kind":"method","access":"public","line":21,"leaves":[22]},{"name":"finder","kind":"field","access":"private","line":19,"leaves":[19]}]},{"name":"MissingInvocationVerifier","kind":"class","access":"public","line":15,"children":[{"name":"MissingInvocationVerifier()","kind":"method","access":"public","line":20,"leaves":[21]},{"name":"MissingInvocationVerifier(InvocationsFinder,Reporter)","kind":"method","access":"public","line":24,"children":[{"name":"finder","kind":"null","access":"default","local":true,"line":24,"leaves":[24]}]},{"name":"finder","kind":"field","access":"private","line":18,"leaves":[18]}]},{"name":"MissingInvocationInOrderVerifier","kind":"class","access":"public","line":15,"children":[{"name":"finder","kind":"field","access":"private","line":18,"leaves":[18]},{"name":"MissingInvocationInOrderVerifier(InvocationsFinder,Reporter)","kind":"method","access":"public","line":24,"children":[{"name":"finder","kind":"null","access":"default","local":true,"line":24,"leaves":[24]}]},{"name":"MissingInvocationInOrderVerifier()","kind":"method","access":"public","line":20,"leaves":[21]}]},{"name":"NumberOfInvocationsVerifier","kind":"class","access":"public","line":16,"children":[{"name":"NumberOfInvocationsVerifier(Reporter,InvocationsFinder)","kind":"method","access":"default","line":0,"children":[{"name":"finder","kind":"null","access":"default","local":true,"line":25,"leaves":[25]}]},{"name":"finder","kind":"field","access":"private","line":19,"leaves":[19]},{"name":"NumberOfInvocationsVerifier()","kind":"method","access":"public","line":21,"leaves":[22]}]},{"name":"InvocationsFinderStub","kind":"class","access":"default","line":15,"leaves":[15]}]}]}]}]}]},"findPreviousVerifiedInOrder(java.util.List)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinderTest","kind":"class","access":"public","line":25,"children":[{"name":"shouldFindPreviousInOrder():void","kind":"method","access":"public","line":139,"children":[{"name":"previous","kind":"null","access":"default","local":true,"line":141,"leaves":[141]}],"leaves":[147]}]}]},{"kind":"package","name":"verification","classes":[{"name":"MissingInvocationInOrderVerifier","kind":"class","access":"public","line":15,"children":[{"name":"verify(List,InvocationMatcher,VerificationModeImpl):void","kind":"method","access":"public","line":29,"children":[{"name":"previousInOrder","kind":"null","access":"default","local":true,"line":40,"leaves":[40]}]}]}]}]}]}]}]},"getLastStackTrace(java.util.List)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinderTest","kind":"class","access":"public","line":25,"children":[{"name":"shouldGetLastStackTrace():void","kind":"method","access":"public","line":90,"children":[{"name":"last","kind":"null","access":"default","local":true,"line":92,"leaves":[92]}],"leaves":[95]}]}]},{"kind":"package","name":"verification","classes":[{"name":"NumberOfInvocationsInOrderVerifier","kind":"class","access":"public","line":16,"children":[{"name":"verify(List,InvocationMatcher,VerificationModeImpl):void","kind":"method","access":"public","line":30,"children":[{"name":"lastInvocation","kind":"null","access":"default","local":true,"line":45,"leaves":[45]}]}]},{"name":"NumberOfInvocationsVerifier","kind":"class","access":"public","line":16,"children":[{"name":"verify(List,InvocationMatcher,VerificationModeImpl):void","kind":"method","access":"public","line":30,"children":[{"name":"lastInvocation","kind":"null","access":"default","local":true,"line":39,"leaves":[39]}]}]}]}]}]}]}]},"removeVerifiedInOrder(java.util.List)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinder","kind":"class","access":"public","line":15,"children":[{"name":"findMatchingChunk(List,InvocationMatcher,VerificationModeImpl):List","kind":"method","access":"public","line":41,"children":[{"name":"unverified","kind":"null","access":"default","local":true,"line":42,"leaves":[42]}]},{"name":"findAllMatchingUnverifiedChunks(List,InvocationMatcher):List","kind":"method","access":"public","line":21,"children":[{"name":"unverified","kind":"null","access":"default","local":true,"line":22,"leaves":[22]}]}]}]}]}]}]}]},"<init>()":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"verification","classes":[{"name":"InvocationsFinderStub","kind":"class","access":"default","line":15,"children":[{"name":"InvocationsFinderStub()","kind":"method","access":"default","line":0,"leaves":[15]}]}]}]}]}]}]},"findInvocations(java.util.List,org.mockito.internal.invocation.InvocationMatcher,org.mockito.internal.progress.VerificationModeImpl)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinderTest","kind":"class","access":"public","line":25,"children":[{"name":"shouldFindActualInvocations():void","kind":"method","access":"public","line":44,"children":[{"name":"actual","kind":"null","access":"default","local":true,"line":46,"leaves":[46]}],"leaves":[49]}]}]},{"kind":"package","name":"verification","classes":[{"name":"MissingInvocationVerifier","kind":"class","access":"public","line":15,"children":[{"name":"verify(List,InvocationMatcher,VerificationModeImpl):void","kind":"method","access":"public","line":29,"children":[{"name":"actualInvocations","kind":"null","access":"default","local":true,"line":34,"leaves":[34]}]}]},{"name":"NumberOfInvocationsVerifier","kind":"class","access":"public","line":16,"children":[{"name":"verify(List,InvocationMatcher,VerificationModeImpl):void","kind":"method","access":"public","line":30,"children":[{"name":"actualInvocations","kind":"null","access":"default","local":true,"line":35,"leaves":[35]}]}]}]}]}]}]}]},"this":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationsFinder","kind":"class","access":"public","line":15,"children":[{"name":"findMatchingChunk(List,InvocationMatcher,VerificationModeImpl):List","kind":"method","access":"public","line":41,"leaves":[46]}]}]}]}]}]}]}});